import BlogPage from '../pages/blog-page.js'

describe('Blog', () => {
    it('Get the list of all Recent Post, Assert the text length of each list item > 10 characters and Assert the total count of rows = 5 ', async() => {
        //Open URL
        //await browser.url('/blog');  //forward slash will go to base url in the configuration settings
        await BlogPage.open(); 

        //Get the list of all Recent Post 
        //const recentPostList = await $$('#recent-posts-3 ul li');
         const recentPostList = await BlogPage.RecentPosts;

        //Loop through the list and Assert the text length of each list item > 10 characters
         for(const item of recentPostList){
            const  text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
         }


        //Assert the total count of rows = 5
         await expect(recentPostList).toHaveLength(5);


    });
});