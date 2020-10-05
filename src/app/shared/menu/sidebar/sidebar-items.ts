// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  headTitle?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
  {
    path: '/dashboard/default', title: 'Dashboard',  icon: 'icon-desktop', type: 'link'
  },
  {
    title: 'Khách hàng', icon: 'icon-files', type: 'sub', children: [
      { path: '/compact-sidebar/pages/page', title: 'Thông tin khách hàng', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Theo dõi công nợ', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Giao nhân viên hỗ trợ', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Đơn đấu giá AUC', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Đơn đấu giá DG', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Theo dõi đấu giá', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Săn phút chót', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Quản lý ních đấu', type: 'link' },

    ]
  },
  {
    title: 'Yêu thích', icon: 'icon-files', type: 'sub', children: [
      { path: '/compact-sidebar/pages/page', title: 'Sản phẩm yêu thích', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Cửa hàng yêu thích', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Báo giá phút chót', type: 'link' },

    ]
  },
  {
    title: 'Tiền XL ĐH', icon: 'icon-files', type: 'sub', children: [
      { path: '/compact-sidebar/pages/page', title: 'Tiền XL ĐH AUC', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Tiền XL ĐH DG', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Đơn trả giá MERCARI', type: 'link' },

    ]
  },
  {
    title: 'Chờ tạm ứng', icon: 'icon-package', type: 'sub' , children: [
      { path: '/compact-sidebar/pages/page', title: 'Chờ tạm ứng AUC', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Chờ tạm ứng DG', type: 'link' },
    ]
  },
  {
    title: 'Báo giá', icon: 'icon-package', type: 'sub' , children: [
      { path: '/compact-sidebar/pages/page', title: 'Báo giá Y!Auction', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Báo giá mua hộ', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Báo giá MACARI', type: 'link' },
    ]
  },
  {
    path: '/order/transport', title: 'Chờ vận chuyển',  icon: 'icon-files', type: 'link'
  },
  {
    path: '/tran/new', title: 'Đơn hàng mới',  icon: 'icon-files', type: 'link'
  },
  {
    path: '/tran/received', title: 'Chờ tiếp nhận',  icon: 'icon-files', type: 'link'
  },
  {
    title: 'Chờ tất toán', icon: 'icon-package', type: 'sub' , children: [
      { path: '/compact-sidebar/pages/page', title: 'Chờ tất toán AUC', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Chờ tất toán MH', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Chờ tất toán MERCARI', type: 'link' },
    ]
  },
  {
    path: '/order/service', title: 'Dịch vụ GTGT',  icon: 'icon-files', type: 'link'
  },
  {
    path: '/order/cancelorder', title: 'Hủy đơn',  icon: 'icon-files', type: 'link'
  },
];
