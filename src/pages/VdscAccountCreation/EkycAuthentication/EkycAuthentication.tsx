import React from 'react'
import { Wrapper } from './styles'
import TakePhotoModalInfront from '../components/TakePhotoModal'
import TakePhotoModalBehind from '../components/TakePhotoModal'
import PersonalInformation from '../components/PersonalInformation'
import RegisterService from '../components/RegisterService'
import ConfirmForm from '../components/ConfirmForm'
import classNames from 'classnames'
import TakePhotoOfIDModal from '../components/TakePhotoOfIDModal'
import RecordVideoModal from '../components/RecordVideoModal'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import Button from '@/components/Button'
import { Col, Row } from '@/components/GridLayout'
import { css } from '@emotion/react'
import { useAppSelector } from '@/redux/hooks'
import VerticalStep from '@/components/VerticalStep'
import HorizontalStep from '@/components/HorizontalStep'
import NativeMethod from '@/NativeMethod'
import { urltoFile } from '@/NativeMethod/NativeMethod'

interface Props {
  dataOpenStockAccount: any
  setDataOpenStockAccount: any
  currentStep: number
  subCurrentStep: number
  onGoBack: any
  onGoNext: any
  onRefreshClientId: any
  infrontImage: any
  setInfrontImage: any
  behindImage: any
  setBehindImage: any
  profileVideo: any
  setProfileVideo: any
  issuePlaceList: any
  provinceList: any
  bankList: any
  loadingGoNext?: boolean
}

const EkycAuthentication: React.FC<Props> = (props): JSX.Element => {
  const {
    dataOpenStockAccount,
    setDataOpenStockAccount,
    currentStep,
    subCurrentStep,
    onGoBack,
    onGoNext,
    onRefreshClientId,
    infrontImage,
    setInfrontImage,
    behindImage,
    setBehindImage,
    profileVideo,
    setProfileVideo,
    issuePlaceList,
    provinceList,
    bankList
  } = props

  const isDark = useAppSelector((state) => state.theme.isDark)

  const [visibleTakePhotoModalInfront, setVisibleTakePhotoModalInfront] =
    React.useState(false)
  const [visibleTakePhotoModalBehind, setVisibleTakePhotoModalBehind] =
    React.useState(false)
  const [visibleTakePhotoModalProfile, setVisibleTakePhotoModalProfile] =
    React.useState(false)
  const [visibleTakePhotoOfIDModal, setVisibleTakePhotoOfIDModal] =
    React.useState(false)
  const [profileImage, setProfileImage] = React.useState()

  const handleUploadInfrontImage = (e: any) => {
    const fileImage = e.target.files[0]
    console.log(fileImage)

    setInfrontImage(fileImage)
  }

  const handleUploadBehindImage = (e: any) => {
    const fileImage = e.target.files[0]
    setBehindImage(fileImage)
  }

  const handleUseImageFileInfront = (imageFile: any) => {
    setInfrontImage(imageFile)
  }

  const handleUseImageFileBehind = (imageFile: any) => {
    setBehindImage(imageFile)
  }

  const handleCancelTakePhotoOfIDModal = () => {
    setVisibleTakePhotoOfIDModal(false)
  }

  const handleVisibleTakePhotoOfIDModal = () => {
    setVisibleTakePhotoOfIDModal(true)
  }

  const handleUseVideoFile = (videoFile: any) => {
    setProfileVideo(videoFile)
  }

  const handleUseImageFileProfile = (imageFile: any) => {
    setProfileImage(imageFile)
  }

  return (
    <Wrapper isDark={isDark}>
      {/* === 0 */}
      {currentStep === 0 && (
        <div className='container flex'>
          <div className='ekyc_authentication_left_steps'>
            <VerticalStep step={subCurrentStep} />
          </div>

          <div className='ekyc_authentication_right_form'>
            <div className='auto_input_steps'>
              <HorizontalStep step={currentStep} />
            </div>

            <div
              className={classNames('ekyc_authentication_content', {
                hasbg: subCurrentStep !== 2
              })}
            >
              {subCurrentStep === 0 && (
                <React.Fragment>
                  <div
                    css={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 8
                    }}
                  >
                    <Typography
                      variant='heading_three'
                      cssCustom={(theme: Theme) => ({
                        color: theme.color.dc011
                      })}
                    >{`Chụp/tải ảnh CMND/CCCD`}</Typography>
                  </div>

                  <div
                    css={{
                      textAlign: 'center',
                      maxWidth: 636,
                      margin: '0 auto 4px'
                    }}
                  >
                    <Typography
                      variant='body_two'
                      cssCustom={(theme: Theme) => ({
                        color: theme.color.dc015
                      })}
                    >{`Bạn vui lòng sử dụng CMND, thẻ căn cước gốc chính phủ. Hãy đảm bảo thông tin trên ảnh chụp được hiển thị rõ nét, không bị mờ hoặc chói sáng, không mất góc hay cắt xén, chỉnh sửa`}</Typography>
                  </div>

                  <div
                    css={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 16
                    }}
                  >
                    <div onClick={handleVisibleTakePhotoOfIDModal}>
                      <Typography
                        variant='sub_heading_four'
                        cssCustom={(theme: Theme) => ({
                          color: theme.color.blue500,
                          cursor: 'pointer',

                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        })}
                      >{`Xem hướng dẫn chi tiết`}</Typography>
                    </div>
                  </div>

                  <Row className='take_photo_group'>
                    <Col span={24} className='take_photo_item'>
                      <div
                        css={{
                          display: 'flex',
                          justifyContent: 'center',
                          marginBottom: 8
                        }}
                      >
                        <Typography
                          variant='sub_heading_four'
                          cssCustom={(theme: Theme) => ({
                            color: theme.color.dc014
                          })}
                        >{`Mặt trước`}</Typography>
                      </div>

                      <div
                        className={classNames(`take_photo_item_content`, {
                          has_img: Boolean(infrontImage)
                        })}
                      >
                        <div className='take_photo_item_content_btn_group'>
                          {!infrontImage && (
                            <img
                              width={180}
                              height={104}
                              src={`https://cdn.simplize.vn/simplizevn/community/images/1679561684069-Group_708.png`}
                            />
                          )}

                          <label
                            className='upload_image_btn'
                            htmlFor={`in_front_image`}
                            css={{ width: `100%` }}
                          >
                            {`Chụp/tải ảnh`}
                          </label>

                          <input
                            className='take_photo_item_content_upload_image'
                            type={`button`}
                            id={`in_front_image`}
                            onClick={() => {
                              NativeMethod.takeImage({
                                callback: (file) => {
                                  const mineType =
                                    'image/' +
                                    file.name.split('.')[
                                      file.name.split('.').length - 1
                                    ]
                                  urltoFile(
                                    file.base64,
                                    file.name,
                                    mineType
                                  ).then((e) => {
                                    handleUploadInfrontImage(e)
                                  })
                                }
                              })
                            }}
                            accept={`image/*`}
                          />
                        </div>

                        {infrontImage && (
                          <img
                            alt=''
                            className='in_front_image'
                            src={URL.createObjectURL(infrontImage)}
                          />
                        )}
                      </div>
                    </Col>

                    <Col
                      span={24}
                      className='take_photo_item'
                      css={(theme: Theme) =>
                        css({
                          [theme.mediaQuery.mobile]: {
                            marginTop: 24
                          }
                        })
                      }
                    >
                      <div
                        css={{
                          display: 'flex',
                          justifyContent: 'center',
                          marginBottom: 8
                        }}
                      >
                        <Typography
                          variant='sub_heading_four'
                          cssCustom={(theme: Theme) => ({
                            color: theme.color.dc014
                          })}
                        >{`Mặt sau`}</Typography>
                      </div>

                      <div
                        className={classNames(`take_photo_item_content`, {
                          has_img: Boolean(behindImage)
                        })}
                      >
                        <div className='take_photo_item_content_btn_group'>
                          {!behindImage && (
                            <img
                              width={180}
                              height={104}
                              src={`https://cdn.simplize.vn/simplizevn/community/images/1679561665112-Group_710.png`}
                            />
                          )}

                          <label
                            className='upload_image_btn'
                            htmlFor={`behind_image`}
                            css={{ width: `100%` }}
                          >
                            {`Chụp/tải ảnh`}
                          </label>

                          <input
                            className='take_photo_item_content_upload_image'
                            type={`file`}
                            id={`behind_image`}
                            onChange={handleUploadBehindImage}
                            accept={`image/*`}
                          />

                          {/* {!isMobile && (
                            <Button
                              cssCustom={(theme: Theme) => ({
                                backgroundColor: theme.color.dc068,
                                width: '100%',
                                padding: '9px 0px',
                                '&:hover': {
                                  backgroundColor: theme.color.dc068
                                }
                              })}
                              onClick={() =>
                                setVisibleTakePhotoModalBehind(true)
                              }
                            >
                              <Typography
                                variant='sub_heading_four'
                                cssCustom={(theme: Theme) => ({
                                  color: theme.color.dc060
                                })}
                              >{`Chụp ảnh`}</Typography>
                            </Button>
                          )} */}
                        </div>

                        {behindImage && (
                          <img
                            alt=''
                            className='in_front_image'
                            src={URL.createObjectURL(behindImage)}
                          />
                        )}
                      </div>
                    </Col>
                  </Row>
                </React.Fragment>
              )}

              {subCurrentStep === 1 && (
                <React.Fragment>
                  <div
                    css={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 8
                    }}
                  >
                    <Typography
                      variant='heading_three'
                      cssCustom={(theme: Theme) => ({
                        color: theme.color.dc011
                      })}
                    >
                      {`Quay video chân dung`}
                    </Typography>
                  </div>

                  <div
                    css={{
                      textAlign: 'center',
                      maxWidth: 636,
                      margin: '0 auto 16px'
                    }}
                  >
                    <Typography
                      variant='body_two'
                      cssCustom={(theme: Theme) => ({
                        color: theme.color.dc015
                      })}
                    >{`Bạn vui lòng quay video xác thực chân dung. Video sẽ được quay trong 05 giây và cần thấy đầy đủ rõ nét toàn bộ cử động tự nhiên của khuôn mặt`}</Typography>
                  </div>

                  <div className='take_photo_group center'>
                    <div className='take_photo_item'>
                      <div
                        css={{
                          display: 'flex',
                          justifyContent: 'center',
                          marginBottom: 8
                        }}
                      >
                        <Typography
                          variant='sub_heading_four'
                          cssCustom={(theme: Theme) => ({
                            color: theme.color.dc014
                          })}
                        >{`Video chân dung`}</Typography>
                      </div>

                      <div
                        className={classNames(`take_photo_item_content`, {
                          has_img: Boolean(profileImage)
                        })}
                      >
                        <div className='take_photo_item_content_btn_group'>
                          <Button
                            cssCustom={{
                              padding: '7px 27px'
                            }}
                            onClick={() =>
                              setVisibleTakePhotoModalProfile(true)
                            }
                          >
                            <Typography
                              variant='sub_heading_four'
                              cssCustom={(theme: Theme) => ({
                                color: theme.color.gray100
                              })}
                            >{`Quay video`}</Typography>
                          </Button>
                        </div>

                        {profileVideo && profileImage && (
                          <img
                            alt=''
                            className='in_front_image'
                            src={URL.createObjectURL(profileImage)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )}

              {subCurrentStep === 2 && (
                <PersonalInformation
                  visible_type={`EKYC`}
                  dataOpenStockAccount={dataOpenStockAccount}
                  setDataOpenStockAccount={setDataOpenStockAccount}
                  onGoBack={onGoBack}
                  onGoForward={onGoNext}
                  issuePlaceList={issuePlaceList}
                  provinceList={provinceList}
                  bankList={bankList}
                />
              )}
            </div>

            {subCurrentStep !== 2 && (
              <div className='ekyc_authentication_btn_group'>
                <Button
                  cssCustom={(theme: Theme) => ({
                    width: 102,
                    height: 40,
                    backgroundColor: theme.color.dc044,
                    padding: 0,
                    marginRight: 16,
                    '&:hover': {
                      backgroundColor: theme.color.dc044
                    }
                  })}
                  onClick={onGoBack}
                >
                  <Typography
                    variant='sub_heading_four'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.dc014
                    })}
                  >{`Quay lại`}</Typography>
                </Button>

                <Button
                  cssCustom={{ width: 112, height: 40, padding: 0 }}
                  onClick={onGoNext}
                >
                  <Typography
                    variant='sub_heading_four'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.gray100
                    })}
                  >{`Tiếp theo`}</Typography>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* !== 0 */}
      {currentStep !== 0 && (
        <>
          <div className='auto_input_steps'>
            <HorizontalStep step={currentStep} />
          </div>

          {currentStep === 1 && (
            <div className='register_service'>
              <RegisterService
                onGoBack={onGoBack}
                onGoForward={onGoNext}
                onRefreshClientId={onRefreshClientId}
                dataOpenStockAccount={dataOpenStockAccount}
                setDataOpenStockAccount={setDataOpenStockAccount}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className='confirm_form'>
              <ConfirmForm
                dataOpenStockAccount={dataOpenStockAccount}
                setDataOpenStockAccount={setDataOpenStockAccount}
              />
            </div>
          )}
        </>
      )}

      {visibleTakePhotoModalInfront && (
        <TakePhotoModalInfront
          visible={visibleTakePhotoModalInfront}
          onCancel={() => setVisibleTakePhotoModalInfront(false)}
          onUseImageFile={handleUseImageFileInfront}
          onVisibleTakePhotoOfIDModal={handleVisibleTakePhotoOfIDModal}
        />
      )}

      {visibleTakePhotoModalBehind && (
        <TakePhotoModalBehind
          visible={visibleTakePhotoModalBehind}
          onCancel={() => setVisibleTakePhotoModalBehind(false)}
          onUseImageFile={handleUseImageFileBehind}
          onVisibleTakePhotoOfIDModal={handleVisibleTakePhotoOfIDModal}
        />
      )}

      {visibleTakePhotoModalProfile && (
        <RecordVideoModal
          visible={visibleTakePhotoModalProfile}
          onCancel={() => setVisibleTakePhotoModalProfile(false)}
          onUseVideoFile={handleUseVideoFile}
          onUseImageFile={handleUseImageFileProfile}
        />
      )}

      <TakePhotoOfIDModal
        visible={visibleTakePhotoOfIDModal}
        onCancel={handleCancelTakePhotoOfIDModal}
      />
    </Wrapper>
  )
}

export default EkycAuthentication
