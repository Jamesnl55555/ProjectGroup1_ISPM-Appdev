<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="{{route('update-product', $product->id)}}">
        @csrf
        @method('PUT')
        <input type="string" name="name" value="{{$product->name}}" required>
        <input type="number" name="quantity" value="{{$product->quantity}}" required>
        <input type="number" name="price" value="{{$product->price_per_piece}}" required>
        <!-- <input type="file" name="picture" accept="image/*" required> -->
        <button type="submit">Edit Product</button>
        <button type="reset">Clear</button>
    </form>
</body>
</html>