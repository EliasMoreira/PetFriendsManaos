package com.example.petfriendsmanaos.data.remote

import com.example.petfriendsmanaos.data.remote.response.LoginDataResponse

interface RemoteDataSource {
    //pegar dados da api
    suspend fun getLoginDataResponse(email: String, password: String): LoginDataResponse
}