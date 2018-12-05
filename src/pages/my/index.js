import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Input } from '@tarojs/components'
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
      content: '下面的content',
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
  handle = (type, e) => {
    console.log(type, e, '=-==')
  }
  render() {
    const { showDialog, title, cancelName, confirmName, content } = this.state
    return (
      <View className='index'>
        <Text>my</Text>
        <Dialog
          show={showDialog}
          title={title}
          // cancelName={cancelName}
          // confirmName={confirmName}
          // onCancel={this.dialogCancel}
          onConfirm={this.dialogOk}
        >
          {content}
          <Text>222</Text>
        </Dialog>
        {/* <Dialog
          show={showDialog}
          title={title}
          content='上面的content'
          cancelName={cancelName}
          confirmName={confirmName}
          // onCancel={this.dialogCancel}
          // onConfirm={this.dialogOk}
          renderFooter={
            <View style='display:flex'>
              <View
                className='dialog-btn'
                onClick={this.handle.bind(this, 'bad')}
              >
                不好
              </View>
              <View
                className='dialog-btn dialog-btn-ok'
                onClick={this.handle.bind(this, 'ok')}
              >
                好的
              </View>
              <View
                className='dialog-btn dialog-btn-ok'
                onClick={this.handle.bind(this, 'other')}
              >
                其他
              </View>
            </View>
          }
        >
          {content}
          <Text>222</Text>
          <View>
            姓名：
            <Input
              value='wz'
              placeholder='请输入名字'
              style='background:#ececec'
            />
          </View>
        </Dialog>
         */}
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
