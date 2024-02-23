// import mainAxios from '@/apis/main-axios';
// import ReactInfiniteScroll from '@/components/ReactInfiniteScroll';
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import React from 'react'
import ScreenerLayout from '../layout/ScreenerLayout'
import PopularTable from './PopularTable'

const DATA = [
  {
    id: 1,
    screenerName: 'Bộ lọc tăng trưởng',
    screenerDescription:
      'Các cổ phiếu VN30 có tiềm năng tăng cực lớn vào năm 2022',
    userImageUrl:
      'https://cdn.simplize.vn/simplizevn/user/avatar/1643099772911-Ev7NkfnWgAE47om.jpg',
    nameOfUser: 'My Duyen',
    followerCount: 57593,
    resultFilter: 15,
    modifiedDateTimeAgo: '1 tháng trước',
    isPublic: true
  },
  {
    id: 2,
    screenerName: 'Bộ lọc tăng trưởng',
    screenerDescription:
      'Các cổ phiếu VN30 có tiềm năng tăng cực lớn vào năm 2022',
    userImageUrl:
      'https://cdn.simplize.vn/simplizevn/user/avatar/1643099772911-Ev7NkfnWgAE47om.jpg',
    nameOfUser: 'My Duyen',
    followerCount: 57593,
    resultFilter: 15,
    modifiedDateTimeAgo: '1 tháng trước',
    isPublic: false
  },
  {
    id: 3,
    screenerName: 'Bộ lọc tăng trưởng',
    screenerDescription:
      'Các cổ phiếu VN30 có tiềm năng tăng cực lớn vào năm 2022',
    userImageUrl:
      'https://cdn.simplize.vn/simplizevn/user/avatar/1643099772911-Ev7NkfnWgAE47om.jpg',
    nameOfUser: 'My Duyen',
    followerCount: 57593,
    resultFilter: 15,
    modifiedDateTimeAgo: '1 tháng trước',
    isPublic: true
  },
  {
    id: 4,
    screenerName: 'Bộ lọc tăng trưởng',
    screenerDescription:
      'Các cổ phiếu VN30 có tiềm năng tăng cực lớn vào năm 2022',
    userImageUrl:
      'https://cdn.simplize.vn/simplizevn/user/avatar/1643099772911-Ev7NkfnWgAE47om.jpg',
    nameOfUser: 'My Duyen',
    followerCount: 57593,
    resultFilter: 15,
    modifiedDateTimeAgo: '1 tháng trước',
    isPublic: false
  }
]

// const DATA_SAMPLE = [
//   {
//     id: 85,
//     name: 'Long',
//     description: 'a',
//     isPublic: true,
//     modifiedDate: '13/12/2022 15:38',
//     modifiedDateTimeAgo: '2 ngày',
//     followerCount: 2,
//     copyCount: 11,
//     tickerCount: 40,
//     guid: 'c6d1254e-fade-4eec-a8aa-d171f4215539',
//     user: {
//       id: 188,
//       name: 'My Duyen',
//       imageUrl:
//         'https://cdn.simplize.vn/simplizevn/user/avatar/1643099772911-Ev7NkfnWgAE47om.jpg',
//       createdDateTimeAgo: '1 năm',
//       isCurrentUser: false,
//     },
//   },
//   {
//     id: 123,
//     name: 'tes',
//     description: '',
//     isPublic: true,
//     modifiedDate: '07/12/2022 11:22',
//     modifiedDateTimeAgo: '9 ngày',
//     followerCount: 2,
//     copyCount: 3,
//     tickerCount: 10,
//     guid: '0ee58e11-14fb-4a31-b78b-ccf4ecfca6f5',
//     user: {
//       id: 188,
//       name: 'My Duyen',
//       imageUrl:
//         'https://cdn.simplize.vn/simplizevn/user/avatar/1643099772911-Ev7NkfnWgAE47om.jpg',
//       createdDateTimeAgo: '1 năm',
//       isCurrentUser: false,
//     },
//   },
//   {
//     id: 164,
//     name: 'Danh mục theo dõi',
//     isPublic: true,
//     modifiedDate: '10/11/2022 10:40',
//     modifiedDateTimeAgo: '1 tháng',
//     followerCount: 2,
//     copyCount: 0,
//     tickerCount: 13,
//     guid: '1112a987-f39c-4491-87bc-343be681373c',
//     user: {
//       id: 287,
//       name: 'lan test',
//       imageUrl:
//         'https://cdn.simplize.vn/simplizevn/static/avatar/avatar_default.png',
//       createdDateTimeAgo: '6 tháng',
//       isCurrentUser: false,
//     },
//   },
//   {
//     id: 165,
//     name: 'Danh mục theo dõi',
//     isPublic: true,
//     modifiedDate: '10/11/2022 10:39',
//     modifiedDateTimeAgo: '1 tháng',
//     followerCount: 3,
//     copyCount: 0,
//     tickerCount: 13,
//     guid: 'a675557c-638e-48b0-a8b2-75679942a14e',
//     user: {
//       id: 295,
//       name: 'abc',
//       imageUrl:
//         'https://cdn.simplize.vn/simplizevn/static/avatar/avatar_default.png',
//       createdDateTimeAgo: '5 tháng',
//       isCurrentUser: false,
//     },
//   },
// ];

const PopularScreener: React.FC = (): JSX.Element => {
  // useState
  //   const [currentPage, setCurrentPage] = React.useState(1);
  //   const [hasMore, setHasMore] = React.useState<boolean>(true);
  //   const [dataOfTable, setDataOfTable] = React.useState<any[]>();

  // functions
  //   const mappingDataHandler = (dataItems) => {
  //     return dataItems.map((watchlist) => {
  //       return {
  //         key: watchlist.id,
  //         watchlist: {
  //           guid: watchlist.guid,
  //           name: watchlist.name,
  //           description: watchlist.description,
  //         },
  //         creator: watchlist.user,
  //         'number-of-followers': watchlist.followerCount,
  //         'number-of-stocks': watchlist.tickerCount,
  //         'modified-data-time-ago': watchlist.modifiedDateTimeAgo,
  //         action: {
  //           watchlistId: watchlist.id,
  //           isFollowing: true,
  //         },
  //       };
  //     });
  //   };

  // functions
  //   const handleLoadMore = () => {
  //     setCurrentPage(currentPage + 1);

  //     (async () => {
  //       try {
  //         const response = await mainAxios.get(
  //           `/api/personalize/watchlist/follow-list?page=${currentPage}&size=10`
  //         );

  //         if (response.data.length === 0) {
  //           setHasMore(false);
  //           return;
  //         }

  //         const mappingData = mappingDataHandler(response.data);

  //         setDataOfTable([...(dataOfTable as any[]), ...mappingData]);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   };

  // get following watchlists + mapping data
  //   React.useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await mainAxios.get(
  //           `/api/personalize/watchlist/follow-list?page=0&size=10`
  //         );

  //         if (response.data.length < 10) setHasMore(true);

  //         const mappingData = mappingDataHandler(response.data);

  //         setDataOfTable(mappingData);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }, []);

  return (
    <ScreenerLayout hasHeader={false}>
      <div css={{ marginBottom: 4 }}>
        <Typography
          variant='heading_two'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc011
          })}
        >{`Bộ lọc phổ biến`}</Typography>
      </div>
      <div css={{ marginBottom: 32 }}>
        <Typography
          variant='caption'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc014
          })}
        >{`Các bộ lọc công khai được nhiều người theo dõi nhất`}</Typography>
      </div>
      {/* <ReactInfiniteScroll
          data={mappingDataHandler(DATA_SAMPLE)}
          hasMore={hasMore}
          next={handleLoadMore}
          cssCustom={{
            '.simplize-table-header.simplize-table-sticky-holder': {
              top: `0 !important`,
            },
          }}
        > */}
      <PopularTable data={DATA} />
      {/* </ReactInfiniteScroll> */}
    </ScreenerLayout>
  )
}

export default PopularScreener
