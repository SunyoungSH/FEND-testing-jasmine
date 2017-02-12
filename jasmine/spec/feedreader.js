/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        //tests if the allFeeds variables are defined that not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //tests if allFeeds objects have URLs defined and that are not empty
        it('have urls defined and urls are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        //tests if allFeeds objects have names defined and that are not empty
        it('have names defined and names are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function() {
        //tests if the menu element is hidden by default
        it('is hidden by default', function() {
            expect($('body')).toHaveClass('menu-hidden');
        });

        //tests if the menu element is hidden when the menu icon is clicked
        it('changes visibility when icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body')).toHaveClass('');

        });
    });

    describe('Initial Entries', function() {
        //tests if loadFeed() works and if .entry element exists in the .feed container.
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('are not empty', function(done) {
            expect($('.feed').find('.entry').length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        //tests if the feed that is newly loaded by loadFeed() is different from previous feed
        var oldfeed = $('.feed');

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('is loaded', function(done) {
            var newfeed = $('.feed');
            expect(oldfeed).not.toBe(newfeed);
            done();
        });
    });
}());
