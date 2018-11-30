import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Dialog from '../../components/dialog'

import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }
  constructor(props) {
    super(props)
    this.state = { showDialog: true }
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toggleDialog = e => {
    console.log(e, '----')
    this.setState(prevState => ({
      showDialog: !prevState.showDialog
    }))
  }
  render() {
    return (
      <View className='index'>
        <Text>my</Text>
        <Dialog show={this.state.showDialog} />
        <Button
          className='btn-max-w'
          plain
          type='primary'
          onClick={this.toggleDialog}
        >
          按钮{this.state.showDialog ? 'ON' : 'OFF'}
        </Button>
      </View>
    )
  }
}
