if (typeof ColumnsPlugins === 'undefined') var ColumnsPlugins = {};

ColumnsPlugins.ajaxpaging = {
    init: function() {
        var $this = this;
        
        /** turning off default functionality */
        $this.conditioning = false;
        $this.paginating = false;
        $this.searching = false;
        $this.sorting = false;

        /** creating default handler */ 
        var handler = function() {
            $.ajax({
                url:"http://local.meizai.com/api.php?m=poi&a=getList&source=baidu&query=%E9%A4%90%E9%A5%AE&searchType=circle&range=24.50000,118.20000",
                async: false,
                dataType: 'json',
                data: {
                    "pageID": $this.page,
                    "recPerPage": $this.size,
                    "sortBy": $this.sortBy,
                    "reverse": $this.reverse,
                    "searchWord": $this.query
                },
                success: function(json) {
                    $this.total = json.recTotal;
                    $this.pages = json.pages;
                    $this.setMaster(json.data);
                    $this.create();
                }
            });
        }

        /** override handlers */ 
        $this.pageHandler = handler;
        $this.sizeHandler = handler;

        /** search handler, sets page to 1 first */ 
        $this.searchHandler = function() {
            $this.page = 1;
            handler();
        }

        /** sort handler, sets page to 1 first */ 
        $this.sortHandler = function() {
            $this.page = 1;
            handler();
        }
    },

    create: function() {
        var $this = this;
        
        /** setting current result range */
        $this.setRange();

        /** setting view variables */
        $this.view.tableTotal = $this.total;
        $this.view.prevPageExists = $this.pageExists($this.page-1);
        $this.view.nextPageExists = $this.pageExists($this.page+1); 
        $this.view.resultRange = $this.range;
    }
}
