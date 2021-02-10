<?php

class AppError extends MX_Controller
{
	public function index()
	{
		$this->template->show404();
	}
}
