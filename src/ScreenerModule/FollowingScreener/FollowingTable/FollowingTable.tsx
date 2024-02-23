import { PlusIconGray100 } from '@/components/icons/PlusIconGray100'
import Typography from '@/components/Typography'
import utilStyles from '@/styles/util-styles'
import { Theme } from '@/themes/theme'
import { formatPriceVND } from '@/utils/format-price'
import { css } from '@emotion/react'
import Table from 'rc-table'
import React from 'react'
import styles from './styles'

enum TableFollowingFieldId {
  id = 'id',
  screenerName = 'screenerName',
  screenerDescription = 'screenerDescription',
  userImageUrl = 'userImageUrl',
  nameOfUser = 'nameOfUser',
  followerCount = 'followerCount',
  resultFilter = 'resultFilter',
  modifiedDateTimeAgo = 'modifiedDateTimeAgo',
  isPublic = 'isPublic'
}

interface Props {
  data?: any
}

const FollowingTable: React.FC<Props> = (props) => {
  const { data } = props

  const [columnData, setColumnData] = React.useState<any>([])
  const [rowData, setRowData] = React.useState<any>([])

  React.useEffect(() => {
    setColumnData(createColumns())
  }, [])

  React.useEffect(() => {
    if (data?.length > 0) {
      setRowData(
        data?.map((item: any) => ({
          ...item,
          sharesHeldValueVnd: item?.sharesHeldValueVnd?.value,
          sharesHeld: item?.sharesHeld?.value,
          positionChange: item?.positionChange?.value
        }))
      )
    }
  }, [data])

  const createColumns = () => [
    {
      key: TableFollowingFieldId.screenerName,
      title: 'Tên bộ lọc',
      dataIndex: TableFollowingFieldId.screenerName,
      width: 200,
      align: 'left',
      render: (_, record) => (
        <div>
          <div css={{ marginBottom: 4 }}>
            <Typography
              variant='sub_heading_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >
              {record?.screenerName}
            </Typography>
          </div>
          <div
            css={(theme: Theme) => ({
              color: theme.color.dc014,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: `ellipsis`,
              maxWidth: 220
            })}
          >
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) =>
                css({
                  color: theme.color.dc014
                })
              }
            >
              {record?.screenerDescription}
            </Typography>
          </div>
        </div>
      )
    },
    {
      key: TableFollowingFieldId.userImageUrl,
      title: 'Người tạo',
      dataIndex: TableFollowingFieldId.userImageUrl,
      width: 100,
      align: 'left',
      render: (_, record) => (
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div
            css={{
              position: 'relative',
              width: 24,
              height: 24,
              borderRadius: '50%',
              overflow: 'hidden'
            }}
          >
            <img
              css={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              src={record?.userImageUrl}
            />
          </div>
          <div css={{ marginLeft: 8 }}>
            <Typography
              variant='sub_heading_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc013
              })}
            >
              {record?.nameOfUser}
            </Typography>
          </div>
        </div>
      )
    },
    {
      key: TableFollowingFieldId.followerCount,
      title: 'Số người theo dõi',
      dataIndex: TableFollowingFieldId.followerCount,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <div>
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc013
            })}
          >
            {formatPriceVND(record?.followerCount)}
          </Typography>
        </div>
      )
    },
    {
      key: TableFollowingFieldId.resultFilter,
      title: 'Kết quả bộ lọc',
      dataIndex: TableFollowingFieldId.resultFilter,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <div>
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc013
            })}
          >
            {record?.resultFilter}
          </Typography>
        </div>
      )
    },
    {
      key: TableFollowingFieldId.modifiedDateTimeAgo,
      title: 'Cập nhật gần nhất',
      dataIndex: TableFollowingFieldId.modifiedDateTimeAgo,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <div>
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc013
            })}
          >
            {record?.modifiedDateTimeAgo}
          </Typography>
        </div>
      )
    },
    {
      key: TableFollowingFieldId.isPublic,
      title: 'Action',
      dataIndex: TableFollowingFieldId.isPublic,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.isPublic && (
            <button css={styles.followBtn()}>
              <PlusIconGray100 />
              <Typography
                variant='caption_two'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.gray100,
                  marginLeft: 2
                })}
              >{`Theo dõi`}</Typography>
            </button>
          )}
          {!record?.isPublic && (
            <button css={styles.followingBtn()}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc014
                })}
              >{`Đang theo dõi`}</Typography>
            </button>
          )}
        </div>
      )
    }
  ]

  return (
    <Table
      prefixCls={`simplize-table`}
      css={utilStyles.table()}
      columns={columnData}
      data={rowData}
      scroll={{ x: true }}
      sticky={{ offsetHeader: 56 }}
    />
  )
}

export default FollowingTable
