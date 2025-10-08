<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Transaction extends Model
{
     use HasFactory;
    
     public function transactionhistories(): HasMany
    {
        return $this->hasMany(TransactionHistory::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected $fillable = [
        'user_name',
        'product_name',
        'quantity', 
        'price',
        'total_amount',
    ];
}
