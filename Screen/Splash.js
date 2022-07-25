import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'

export default function Splash({ navigation }) {

    setTimeout(() => {
        navigation.replace('Home');
    }, 2000)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.primary
        }}>
            <View style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../logo.png')} style={{
                    width: 150,
                    height: 150
                }} />
                <Text style={styles.txtLogo}>MANAJEMEN ASET</Text>
                <Text style={styles.txtLogo2}>Aplikasi untuk manajemen aset barang</Text>
                <ActivityIndicator size="large" color={colors.white} />
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 15,
        marginVertical: 2,
        color: colors.primary,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 18,
        marginBottom: 10,
        color: colors.primary,
    },
    txtLogo: {
        fontFamily: fonts.secondary[600],
        fontSize: 35,
        marginBottom: 5,
        color: colors.white,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 17,
        color: colors.white,
        marginBottom: 20,
    },
    txtBrand: {
        fontFamily: fonts.secondary[600],
        fontSize: 17,
        marginTop: 10,
        color: colors.primary,
    }

})