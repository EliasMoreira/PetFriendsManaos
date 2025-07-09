package com.example.petfriendsmanaos.ui.feature

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.petfriendsmanaos.data.model.LoginInfo
import com.example.petfriendsmanaos.ui.theme.PetFriendsManaosTheme

//viewmodel e recuperar o estado
@Composable
fun LoginRoute() {

}

@Composable
fun LoginScreen(loginInfo: LoginInfo) {
    loginInfo.let {
        Surface {
            Column {
                Text(text = loginInfo.resposta)
            }
        }
    }
}

@Preview
@Composable
fun LoginScreenPreview() {
    PetFriendsManaosTheme {
        val login = LoginInfo(resposta = "sim")
        LoginScreen(login)
    }
}