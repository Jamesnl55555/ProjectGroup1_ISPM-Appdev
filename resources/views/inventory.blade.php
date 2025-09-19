<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Inventory Management</h1>
    @if(isset($product))
        <h2>Inventory List</h2>
        <ul>
            @foreach($product as $item)
                <li>
                    <strong>{{ $item->name }}</strong><br>
                    Quantity: {{ $item->quantity }}<br>
                    Price: ${{ $item->price }}<br>
                    <!-- <img src="{{ Storage::url($item->file_path) }}" alt="{{ $item->name }}" width="100"> -->
                </li>
            @endforeach
        </ul>
    @endif
    <a href="/addproduct" >Add New Product</a>
    

</body>
</html>