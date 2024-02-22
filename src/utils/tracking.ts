export const getTrackingDefault = (
  userId: string | number,
  fullName: string,
  isMobile: boolean,
  provider: string,
  theme: string
) => {
  return [
    {
      id: 1,
      value: userId
    },
    {
      id: 2,
      value: fullName
    },
    {
      id: 3,
      value: isMobile ? 'mweb' : 'web'
    },
    {
      id: 4,
      value: provider
    },
    {
      id: 6,
      value: theme
    }
  ]
}

export const getCustomDimension = (
  userId: string | number,
  isMobile: boolean
) => {
  return [
    {
      id: 1,
      value: userId
    },
    {
      id: 3,
      value: isMobile ? 'mweb' : 'web'
    }
  ]
}
