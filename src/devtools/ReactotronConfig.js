import AsyncStorage from '@react-native-async-storage/async-storage'
import Reactotron from 'reactotron-react-native'

Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ name: 'MacellanCaseStudy' })
    .useReactNative()
    .connect()

Reactotron.onCustomCommand({
    title: 'Clear AsyncStorage',
    description: 'Clears the React Native AsyncStorage',
    command: 'clearAsyncStorage',
    handler: () => {
        Reactotron.log('Clearing React Native AsyncStorage')
        AsyncStorage.clear()
    },
})
