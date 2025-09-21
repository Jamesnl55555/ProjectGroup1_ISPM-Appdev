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
                    Price per piece: ${{ $item->price_per_piece }}<br>
                    Overall price: ${{$item->overall_price}}<br>
                    <!-- <img src="{{ Storage::url($item->file_path) }}" alt="{{ $item->name }}" width="100"> -->
                    
                    <form method="POST" action="{{route('update-item-inc', $item->id)}}">
                        @csrf
                        @method('PUT')
                        
                        <input type="hidden" name="quantity" value="{{$item->quantity}}"/>
                        <button type="submit">+</button>
                    </form>
                    <form method="POST" action="{{route('update-item-dec', $item->id)}}">
                        @csrf
                        @method('PUT')
            
                        <input type="hidden" name="quantity" value="{{$item->quantity}}"/>
                        <button type="submit">-</button>
                    </form>
                    <Link>
                        <a href="/edit-product/{{$item->id}}">Update Product</a>

                    </Link>
                    <form method="POST" action="{{route('delete-item', $item->id)}}">
                        @csrf
                        @method('DELETE')
                        <button type="submit">Delete Product</button>
                    </form>
                
                </li>
            @endforeach
        </ul>
    @endif
    <a href="/addproduct" >Add New Product</a>
    

</body>
</html>