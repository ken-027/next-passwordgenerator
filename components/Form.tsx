import React from 'react'
import {
  Button,
  Input,
  Form as AntForm,
  InputNumber,
  Select,
  Card,
  Space,
} from 'antd'

const Form = () => {
  const [form] = AntForm.useForm()
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Card
        style={{
          width: 500,
          margin: 'auto',
        }}>
        <AntForm
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          layout='vertical'
          form={form}
          style={{ maxWidth: 600 }}>
          <AntForm.Item
            label='Secret Key'
            name='secret_key'
            initialValue=''
            rules={[
              { required: true, message: 'Please input your secret key!' },
            ]}>
            <Input placeholder='Secret key' />
          </AntForm.Item>
          <AntForm.Item
            label='Message'
            name='message'
            initialValue=''
            rules={[{ required: true, message: 'Please input your message!' }]}>
            <Input placeholder='Message' />
          </AntForm.Item>
          <AntForm.Item
            label='Generate Characters'
            name='character'
            initialValue=''
            rules={[{ required: true, message: 'Please input your message!' }]}>
            <InputNumber
              min={8}
              defaultValue={8}
              placeholder='Message'
            />
          </AntForm.Item>
          <AntForm.Item
            label='Modules'
            name='modules'
            initialValue=''
            rules={[{ required: true, message: 'Please input your message!' }]}>
            <Space wrap>
              <Select
                defaultValue='lucy'
                showSearch
                style={{
                  minWidth: 200,
                }}
                options={[
                  {
                    value: 'jack',
                    label: 'Jack',
                  },
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                  {
                    value: 'Yiminghe',
                    label: 'yiminghe',
                  },
                  {
                    value: 'disabled',
                    label: 'Disabled',
                    disabled: true,
                  },
                ]}
              />
            </Space>
          </AntForm.Item>
          <AntForm.Item
            label=' '
            name='button'
            initialValue=''>
            <Button
              type='primary'
              onClick={() => alert(27)}
              style={{ background: '#292D32' }}>
              Generate
            </Button>
          </AntForm.Item>
        </AntForm>
      </Card>
    </>
  )
}

export default Form
