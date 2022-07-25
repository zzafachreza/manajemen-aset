
import React, { useState } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'react-native-elements'
import { colors } from '../utils';
import axios from 'axios';
export default function Cek({ navigation }) {

    const [lampu, setLampu] = useState(false);
    const [barcode, setBarcode] = useState('');

    const onSuccess = e => {
        console.log(e.data);
        setBarcode(e.data);
        axios.post('https://aset.zavalabs.com/api/get.php', {
            key: e.data
        }).then(res => {
            navigation.replace('Hasil', res.data)
        })
    };


    return (
        <QRCodeScanner
            onRead={onSuccess}
            type={RNCamera.Constants.Type.back}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={lampu ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
            topContent={
                <Text style={styles.centerText}>
                    Silahkan scan barcode barang
                </Text>
            }
            bottomContent={

                <>
                    {!lampu && <TouchableOpacity onPress={() => setLampu(true)} style={{
                        backgroundColor: colors.primary,
                        padding: 20,
                        borderRadius: 10,
                    }}>
                        <Icon type='ionicon' name='flash-off' color={colors.white} />
                    </TouchableOpacity>}

                    {lampu && <TouchableOpacity onPress={() => setLampu(false)} style={{
                        backgroundColor: colors.primary,
                        padding: 20,
                        borderRadius: 10,
                    }}>
                        <Icon type='ionicon' name='flash' color={colors.white} />
                    </TouchableOpacity>}
                </>

            }
        />
    )
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});