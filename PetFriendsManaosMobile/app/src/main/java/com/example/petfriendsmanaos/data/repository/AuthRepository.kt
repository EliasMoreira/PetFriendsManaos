package com.example.petfriendsmanaos.data.repository

import com.example.petfriendsmanaos.data.model.LoginInfo

interface AuthRepository {
    suspend fun getLoginData(email: String, password: String) : LoginInfo
}