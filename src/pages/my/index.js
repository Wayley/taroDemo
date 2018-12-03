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
    this.state = {
      showDialog: false,
      title: '提示-',
      content: '',
      cancelName: '取消',
      confirmName: '确定'
    }
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toggleDialog = e => {
    e.stopPropagation()
    this.setState(prevState => ({
      showDialog: !prevState.showDialog
    }))
  }
  dialogCancel = () => {
    console.log('outer cancel')
    this.setState({
      showDialog: false
    })
  }
  dialogOk = () => {
    console.log('outer ok')
    this.setState({
      showDialog: false
    })
  }
  render() {
    const { showDialog, title, cancelName, confirmName, content } = this.state
    return (
      <View className='index'>
        <Text>my</Text>
        <Dialog
          show={showDialog}
          title={title}
          cancelName={cancelName}
          confirmName={confirmName}
          onCancel={this.dialogCancel}
          onConfirm={this.dialogOk}
        >
          {content}
          <Text>222</Text>
        </Dialog>
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
