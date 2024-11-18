<?php

namespace App\Models\Enums;

enum Role: int
{
    case Client = 0;
    case Admin =  1;
};
