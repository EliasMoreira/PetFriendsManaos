package com.example.petfriendsmanaos.data.repository

import com.example.petfriendsmanaos.data.model.LoginInfo
import com.example.petfriendsmanaos.data.remote.RemoteDataSource
import javax.inject.Inject

class AuthRepositoryImpl @Inject constructor(
    private val remoteDataSource: RemoteDataSource
): AuthRepository {
    override suspend fun getLoginData(
        email: String,
        password: String
    ): LoginInfo {
        val response = remoteDataSource.getLoginDataResponse(email, password)
        val login = response.resposta

        return LoginInfo(
            resposta = login
        )
    }
}