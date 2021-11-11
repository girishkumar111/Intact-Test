import {
    LightningElement,
    wire,
    api
} from 'lwc';
import fetchPosts from '@salesforce/apex/PostsController.fetchPosts';

const DELAY = 300;

export default class posts extends LightningElement {
    columns = [{
            label: 'User Id',
            fieldName: 'userId',
            type: 'text',
            initialWidth: 250,
            sortable: true
        },
        {
            label: 'Id',
            fieldName: 'id',
            type: 'text',
            initialWidth: 250,
            sortable: true
        },
        {
            label: 'Title',
            fieldName: 'title',
            type: 'text',
            wrapText: true,
            sortable: true
        },
        {
            label: 'Body',
            fieldName: 'body',
            type: 'text',
            wrapText: true,
            sortable: true
        }
    ];
    error;
    recordsperpage = 10;
    recordsToDisplay;
    totalRecords;
    pageNo;
    totalPages;
    startRecord;
    endRecord;
    end = false;
    pagelinks = [];
    isLoading = false;
    defaultSortDirection = 'asc';
    sortDirection = 'asc';
    ortedBy;

    connectedCallback() {
        this.isLoading = true;
    }

    @wire(fetchPosts)
    wiredFetchPosts({
        error,
        data
    }) {
        if (data) {
            this.records = data;
            this.error = undefined;

            this.setRecordsToDisplay();
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    setRecordsToDisplay() {
        this.totalRecords = this.records.length;
        this.pageNo = 1;
        this.totalPages = Math.ceil(this.totalRecords / this.recordsperpage);
        this.preparePaginationList();

        for (let i = 1; i <= this.totalPages; i++) {
            this.pagelinks.push(i);
        }

        this.isLoading = false;
    }

    handleClick(event) {
        let label = event.target.label;
        if (label === "First") {
            this.handleFirst();
        } else if (label === "Previous") {
            this.handlePrevious();
        } else if (label === "Next") {
            this.handleNext();
        } else if (label === "Last") {
            this.handleLast();
        }
    }

    handleNext() {
        this.pageNo += 1;
        this.preparePaginationList();
        const topDiv = this.template.querySelector('[data-id="redDiv"]');
        topDiv.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    }

    handlePrevious() {
        this.pageNo -= 1;
        this.preparePaginationList();
        const topDiv = this.template.querySelector('[data-id="redDiv"]');
        topDiv.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    }
    preparePaginationList() {
        this.isLoading = true;
        let begin = (this.pageNo - 1) * parseInt(this.recordsperpage);
        let end = parseInt(begin) + parseInt(this.recordsperpage);
        this.recordsToDisplay = this.records.slice(begin, end);

        this.startRecord = begin + parseInt(1);
        this.endRecord = end > this.totalRecords ? this.totalRecords : end;
        this.end = end > this.totalRecords ? true : false;

        window.clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => {
            this.disableEnableActions();
        }, DELAY);
        this.isLoading = false;
    }

    disableEnableActions() {
        let buttons = this.template.querySelectorAll("lightning-button");

        buttons.forEach(bun => {
            if (bun.label === this.pageNo) {
                bun.disabled = true;
            } else {
                bun.disabled = false;
            }

            if (bun.label === "First") {
                bun.disabled = this.pageNo === 1 ? true : false;
            } else if (bun.label === "Previous") {
                bun.disabled = this.pageNo === 1 ? true : false;
            } else if (bun.label === "Next") {
                bun.disabled = this.pageNo === this.totalPages ? true : false;
            } else if (bun.label === "Last") {
                bun.disabled = this.pageNo === this.totalPages ? true : false;
            }
        });
    }

    handlePage(button) {
        this.pageNo = button.target.label;
        this.preparePaginationList();
        const topDiv = this.template.querySelector('[data-id="redDiv"]');
        topDiv.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    }

    onHandleSort(event) {
        const {
            fieldName: sortedBy,
            sortDirection
        } = event.detail;
        const cloneData = [...this.recordsToDisplay];
        cloneData.sort(this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1));
        this.recordsToDisplay = cloneData;
        this.sortDirection = sortDirection;
        this.sortedBy = sortedBy;
    }

    sortBy(field, reverse, primer) {

        const key = primer ?
            function (x) {
                return primer(x[field]);
            } :
            function (x) {
                return x[field];
            };

        return function (a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }
}