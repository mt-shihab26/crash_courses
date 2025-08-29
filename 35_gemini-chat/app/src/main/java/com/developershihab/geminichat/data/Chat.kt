package com.developershihab.geminichat.data

import android.graphics.Bitmap

data class Chat (
    var prompt: String,
    var bitmap: Bitmap?,
    var isFromUser: Boolean,
)