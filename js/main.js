var app = new Vue({
    el: '#app', 

    data: { 
        to: moment(moment().year() + '1231', 'YYYYMMDD'), 
        current: moment(), 
        diff: null, 
        duration: null, 
        interval: 1000
    }, 
    
    methods: {
        months: function() {
            return moment.duration(this.duration).months();
        }, 

        days: function() {
            return moment.duration(this.duration).days();
        },

        hours: function() {
            return moment.duration(this.duration).hours();
        }, 

        minutes: function() {
            return moment.duration(this.duration).minutes();
        }, 

        seconds: function() {
            return moment.duration(this.duration).seconds();
        }
    }, 

    mounted: function() {
        this.diff = this.to.unix() - this.current.unix();
        this.duration = moment.duration(this.diff * 1000, 'milliseconds');

        if (this.diff > 0) {
            setInterval(() => {
                this.duration = moment.duration(this.duration.asMilliseconds() - this.interval, 'milliseconds');
            }, this.interval);
        }
    }
});