<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="_token" content="{{ csrf_token() }}">
    <title>Рисовалка</title>
</head>
<body>
<div id="container" style="height: 400px"></div>
<div class="gallery">
    @if(count($oImages) > 0)
        @foreach($oImages as $oImage)
            <img src="{{ $oImage->file }}">
        @endforeach
    @endif
</div>
<script src="/assets/js/index.js" type="module"></script>
<style>
    .gallery {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 3rem;
        padding: 10px;
    }
    .gallery img {
        width: max(150px, 30%);
        height: 200px;
        border: 3px solid gray;
        border-radius: 5px;
        margin: 5px;
        object-fit: contain;
    }
</style>
</body>
</html>
