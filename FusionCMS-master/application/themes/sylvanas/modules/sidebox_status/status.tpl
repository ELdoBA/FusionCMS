{foreach from=$realms item=realm}
	<div class="realm">
		<div class="realm_online">
			{if $realm->isOnline()}
				{$realm->getOnline()} / {$realm->getCap()}
			{else}
				Offline
			{/if}
		</div>
		{$realm->getName()}
		
		<div class="realm_bar">
			{if $realm->isOnline()}
				<div class="realm_bar_fill_a" style="width:{if $realm->getPercentage("horde") == 0 && $realm->getPercentage("alliance") == 0}50{else}{$realm->getPercentage("alliance")}{/if}%"></div><div class='realm_bar_fill_h' style='width:{if $realm->getPercentage("horde") == 0 && $realm->getPercentage("alliance") == 0}50{else}{$realm->getPercentage("horde")}{/if}%'></div>
			{/if}
		</div>
		<!--
			Other values, for designers:

			$realm->getOnline("horde")
			$realm->getPercentage("horde")

			$realm->getOnline("alliance")
			$realm->getPercentage("alliance")

		-->

	</div>

	<div class="side_divider"></div>
{/foreach}
<div id="realmlist">set realmlist {$realmlist}</div>