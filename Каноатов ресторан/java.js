mDrawerToggle = new ActionBarDrawerToggle(this, Drawer, toolbar, R.string.drawer_open, R.string.drawer_close) {
    @Override
    public void onDrawerOpened(View drawerView) {
        super.onDrawerOpened(drawerView);
        // code here will execute once the drawer is opened( As I dont want anything happened whe drawer is
        // open I am not going to put anything here)
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (item != null && item.getItemId() == android.R.id.home) {
            if (Drawer.isDrawerOpen(Gravity.RIGHT)) {
                Drawer.closeDrawer(Gravity.RIGHT);
            } else {
                Drawer.openDrawer(Gravity.RIGHT);
            }
        }
        return false;
    }
    @Override
    public void onDrawerClosed(View drawerView) {
        super.onDrawerClosed(drawerView);
        // Code here will execute once drawer is closed
    }
};