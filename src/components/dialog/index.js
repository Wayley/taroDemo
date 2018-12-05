import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import Mask from '../../components/mask'
import { isFunction } from '../../utils/index'
import './index.scss'

class Dialog extends Component {
  static propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
  }

  static defaultProps = {
    show: false,
    title: '温馨提示',
    content: '',
    cancelName: '取消',
    confirmName: '确定'
  }
  handleCancel = () => {
    isFunction(this.props.onCancel) && this.props.onCancel()
  }
  handleConfirm = () => {
    isFunction(this.props.onConfirm) && this.props.onConfirm()
  }
  render() {
    const {
      show,
      title,
      content,
      cancelName,
      confirmName,
      onCancel,
      onConfirm
    } = this.props
    return (
      <View>
        {show && (
          <View>
            <Mask show />
            <View className='dialog'>
              <View className='dialog-title'>{title}</View>
              <View className='dialog-content'>
                {content}
                {this.props.children}
              </View>
              <View className='dialog-footer'>
                {onCancel && (
                  <View className='dialog-btn' onClick={this.handleCancel}>
                    {cancelName}
                  </View>
                )}
                {onCancel && onConfirm && <View className='separator' />}
                {onConfirm && (
                  <View
                    className='dialog-btn dialog-btn-ok'
                    onClick={this.handleConfirm}
                  >
                    {confirmName}
                  </View>
                )}
                {!onCancel && !onConfirm && this.props.renderFooter && (
                  <View className='dialog-btn'>{this.props.renderFooter}</View>
                )}
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }
}

export default Dialog
