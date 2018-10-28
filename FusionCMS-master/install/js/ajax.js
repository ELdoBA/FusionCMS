var Ajax = {

	initialize: function()
	{
		$.get("system.php?step=getEmulators", function(data)
		{
			data = JSON.parse(data);

			$("#emulator").html("");

			$.each(data, function(key, value)
			{
				$("#emulator").append('<option value=' + key + '>' + value + '</option>');
			});
		});
	},

	Realms: {
		data: [],

		add: function(form)
		{
			var values = {};

			$(form).find("input, select").each(function()
			{
				if($(this).attr("type") != "submit")
				{
					values[$(this).attr("id")] = $(this).val();
					$(this).val("");
				}
			});

			Ajax.Realms.data.push(values);

			$("#realm_field").append("<li>" + values.realmName + "</li>");
		},

		next: function()
		{
			if(Ajax.Realms.data.length)
			{
				UI.confirm('<input type="text" id="superadmin" placeholder="Enter username that will receive owner access..." autofocus/>', 'Accept', function()
				{
					var name = $("#superadmin").val();
					UI.Navigation.next();
					Ajax.Install.initialize(name);
				});
			}
			else
			{
				UI.alert('Please add at least one realm!');
			}
		}
	},

	checkKey: function()
	{
		var field = $("#key_ajax");
		var cache = field.html();
		var license = $("#license").val();

		field.fadeOut(100, function()
		{
			field.html('<img src="images/ajax.gif" />').fadeIn(100, function()
			{
				$.post("http://fusion.raxezdev.com/remote/license", {license:license}, function(data)
				{
					if(data == '1')
					{
						Ajax.checkPermissions();
						UI.Navigation.next();
					}
					else
					{
						UI.alert('Invalid license key');
						field.html(cache);
					}
				});
			});
		});
	},

	checkPermissions: function()
	{
		$.get("system.php?step=folder&test=config", function(data)
		{
			if(data == '1')
			{
				$("#config_folder").css({color:"green"}).html("/application/config/ is writable");
			}
			else
			{
				$("#config_folder").css({color:"red"}).html('/application/config/ needs to be writable (see <a href="http://en.wikipedia.org/wiki/Chmod" target="_blank">chmod</a>)');
			}
		});

		$.get("system.php?step=folder&test=cache", function(data)
		{
			if(data == '1')
			{
				$("#cache_folder").css({color:"green"}).html("/application/cache/ is writable");
			}
			else
			{
				$("#cache_folder").css({color:"red"}).html('/application/cache/ needs to be writable (see <a href="http://en.wikipedia.org/wiki/Chmod" target="_blank">chmod</a>)');
			}
		});

		$.get("system.php?step=folder&test=modules", function(data)
		{
			if(data == '1')
			{
				$("#modules_folder").css({color:"green"}).html("/application/modules/ is writable");
			}
			else
			{
				$("#modules_folder").css({color:"red"}).html('/application/modules/ needs to be writable (see <a href="http://en.wikipedia.org/wiki/Chmod" target="_blank">chmod</a>)');
			}
		});
	},

	Install: {

		initialize: function(name)
		{
			Ajax.Install.configs(name, function()
			{
				Ajax.Install.database(function()
				{
					Ajax.Install.realms(function()
					{
						Ajax.Install.ranks(function()
						{
							$.get("system.php?step=final", function(data)
							{
								if(data != "success")
								{
									UI.alert('Please delete or rename the "install" folder and then visit <a href="../">your site</a> again.');
								}
								else
								{
									UI.alert('Installation successful', 500);

									setTimeout(function()
									{
										window.location = "../";
									}, 500);
								}
							});
						});
					});
				});
			});
		},

		complete: function()
		{
			$("#install").append("<div style='color:green;display:inline;'>done</div><br />");
		},

		configs: function(name, callback)
		{
			$("#install").append("Writing configs...");

			var data = {
				title: $("#title").val(),
				server_name: $("#server_name").val(),
				realmlist: $("#realmlist").val(),
				expansion: $("#expansion").val(),
				keywords: $("#keywords").val(),
				description: $("#description").val(),
				analytics: $("#analytics").val(),
				cdn: $("#cdn").val(),
				license: $("#license").val(),
				cms_hostname: $("#cms_hostname").val(),
				cms_username: $("#cms_username").val(),
				cms_password: $("#cms_password").val(),
				cms_database: $("#cms_database").val(),
				realmd_hostname: $("#realmd_hostname").val(),
				realmd_username: $("#realmd_username").val(),
				realmd_password: $("#realmd_password").val(),
				realmd_database: $("#realmd_database").val(),
				security_code: $("#security_code").val(),
				emulator: $("#emulator").val(),
				superadmin: name
			};

			$.post("system.php?step=config", data, function(res)
			{
				if(res != '1')
				{
					UI.alert("Something went wrong: " + res);
				}
				else
				{
					Ajax.Install.complete();
					callback();
				}
			});
		},

		database: function(callback)
		{
			$("#install").append("Importing database...");

			$.post("system.php?step=database", function(res)
			{
				if(res != '1')
				{
					UI.alert("Something went wrong: " + res);
				}
				else
				{
					Ajax.Install.complete();
					callback();
				}
			});
		},

		realms: function(callback)
		{
			$("#install").append("Creating realms...");

			var data = {
				realms: JSON.stringify(Ajax.Realms.data),
				emulator: $("#emulator").val()
			}

			$.post("system.php?step=realms", data, function(res)
			{
				if(res != '1')
				{
					UI.alert("Something went wrong: " + res);
				}
				else
				{
					Ajax.Install.complete();
					callback();
				}
			});
		},

		ranks: function(callback)
		{
			$("#install").append("Creating ranks...");

			var data = {
				emulator: $("#emulator").val()
			}

			$.post("system.php?step=ranks", data, function(res)
			{
				if(res != '1')
				{
					UI.alert("Something went wrong: " + res);
				}
				else
				{
					Ajax.Install.complete();
					callback();
				}
			});
		}
	}
}