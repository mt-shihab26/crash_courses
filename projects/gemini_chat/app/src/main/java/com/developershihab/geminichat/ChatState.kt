package com.developershihab.geminichat

import android.graphics.Bitmap
import com.developershihab.geminichat.data.Chat

data class ChatState (
     val chatList: MutableList<Chat> = mutableListOf(),
     val prompt: String = "",
     val bitmap: Bitmap? = null,
)