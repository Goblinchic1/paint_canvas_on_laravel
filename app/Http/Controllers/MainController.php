<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;

class MainController extends Controller
{

    /**
     * Главная
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $oImages = Image::all();
        return view('index', compact('oImages'));
    }


    /**
     * Сохранение картинки
     *
     * @param Request $request
     * @return string
     */
    public function saveImage(Request $request)
    {
        $sName = uniqid();
        $sImage = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $request->image));
        Storage::disk('public')->put($sName . '.png', $sImage);
        Image::create(['file' => '/uploads/' . $sName . '.png']);
        return '/uploads/' . $sName . '.png';
    }
}
