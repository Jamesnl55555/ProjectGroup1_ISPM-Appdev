<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="/add-item">
        @csrf
        <input type="string" name="name" placeholder="Product Name" required>
        <input type="number" name="quantity" placeholder="Quantity" required>
        <input type="number" name="price" placeholder="Price" required>
        <!-- <input type="file" name="picture" accept="image/*" required> -->
        <button type="submit">Add Product</button>
        <button type="reset">Clear</button>
    </form>
</body>
</html>