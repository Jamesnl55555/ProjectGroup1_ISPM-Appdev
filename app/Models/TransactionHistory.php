<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TransactionHistory extends Model
{
    use HasFactory;
    
     public function user(): BelongsTo
    {
        return $this->belongsTo(Transaction::class);
    }

    protected $fillable = [
        'transaction_id',
        'action',
        'changed_data',
    ];
}
