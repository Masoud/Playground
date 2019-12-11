<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function hi(){
        $what=DB::table('tbl_library')->where('name', '=', 'chronoline')->get();
        echo $what;
    }
}

