import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as momentNs from 'moment';
import { UtilsService } from '../common/services/utils/utils.service';
const moment = momentNs;
let MonthCalendarService = class MonthCalendarService {
    constructor(utilsService) {
        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
            allowMultiSelect: false,
            yearFormat: 'YYYY',
            format: 'MM-YYYY',
            isNavHeaderBtnClickable: false,
            monthBtnFormat: 'MMM',
            locale: moment.locale(),
            multipleYearsNavigateBy: 10,
            showMultipleYearsNavigation: false,
            unSelectOnClick: true,
            numOfMonthRows: 3
        };
    }
    getConfig(config) {
        const _config = Object.assign(Object.assign({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config));
        this.validateConfig(_config);
        this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
        moment.locale(_config.locale);
        return _config;
    }
    generateYear(config, year, selected = null) {
        const index = year.clone().startOf('year');
        return this.utilsService.createArray(config.numOfMonthRows).map(() => {
            return this.utilsService.createArray(12 / config.numOfMonthRows).map(() => {
                const date = index.clone();
                const month = {
                    date,
                    selected: !!selected.find(s => index.isSame(s, 'month')),
                    currentMonth: index.isSame(moment(), 'month'),
                    disabled: this.isMonthDisabled(date, config),
                    text: this.getMonthBtnText(config, date)
                };
                index.add(1, 'month');
                return month;
            });
        });
    }
    isMonthDisabled(date, config) {
        if (config.min && date.isBefore(config.min, 'month')) {
            return true;
        }
        return !!(config.max && date.isAfter(config.max, 'month'));
    }
    shouldShowLeft(min, currentMonthView) {
        return min ? min.isBefore(currentMonthView, 'year') : true;
    }
    shouldShowRight(max, currentMonthView) {
        return max ? max.isAfter(currentMonthView, 'year') : true;
    }
    getHeaderLabel(config, year) {
        if (config.yearFormatter) {
            return config.yearFormatter(year);
        }
        return year.format(config.yearFormat);
    }
    getMonthBtnText(config, month) {
        if (config.monthBtnFormatter) {
            return config.monthBtnFormatter(month);
        }
        return month.format(config.monthBtnFormat);
    }
    getMonthBtnCssClass(config, month) {
        if (config.monthBtnCssClassCallback) {
            return config.monthBtnCssClassCallback(month);
        }
        return '';
    }
    validateConfig(config) {
        if (config.numOfMonthRows < 1 || config.numOfMonthRows > 12 || !Number.isInteger(12 / config.numOfMonthRows)) {
            throw new Error('numOfMonthRows has to be between 1 - 12 and divide 12 to integer');
        }
    }
};
MonthCalendarService.ctorParameters = () => [
    { type: UtilsService }
];
MonthCalendarService = __decorate([
    Injectable()
], MonthCalendarService);
export { MonthCalendarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbIm1vbnRoLWNhbGVuZGFyL21vbnRoLWNhbGVuZGFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFFbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBSXBFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUd4QixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQWMvQixZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWJyQyxtQkFBYyxHQUFpQztZQUN0RCxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLHVCQUF1QixFQUFFLEtBQUs7WUFDOUIsY0FBYyxFQUFFLEtBQUs7WUFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdkIsdUJBQXVCLEVBQUUsRUFBRTtZQUMzQiwyQkFBMkIsRUFBRSxLQUFLO1lBQ2xDLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGNBQWMsRUFBRSxDQUFDO1NBQ2xCLENBQUM7SUFHRixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQTRCO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLGdDQUNYLElBQUksQ0FBQyxjQUFjLEdBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUM1QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMs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QUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG1CQUFtQixDQUFDLE1BQTRCLEVBQUUsS0FBYTtRQUM3RCxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTtZQUNuQyxPQUFPLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQztRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVPLGNBQWMsQ0FBQyxNQUFvQztRQUN6RCxJQUFJLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzVHLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztTQUNyRjtJQUNILENBQUM7Q0FDRixDQUFBOztZQW5GbUMsWUFBWTs7QUFkbkMsb0JBQW9CO0lBRGhDLFVBQVUsRUFBRTtHQUNBLG9CQUFvQixDQWlHaEM7U0FqR1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudE5zIGZyb20gJ21vbWVudCc7XG5pbXBvcnQge01vbWVudH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvdXRpbHMvdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge0lNb250aH0gZnJvbSAnLi9tb250aC5tb2RlbCc7XG5pbXBvcnQge0lNb250aENhbGVuZGFyQ29uZmlnLCBJTW9udGhDYWxlbmRhckNvbmZpZ0ludGVybmFsfSBmcm9tICcuL21vbnRoLWNhbGVuZGFyLWNvbmZpZyc7XG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9udGhDYWxlbmRhclNlcnZpY2Uge1xuICByZWFkb25seSBERUZBVUxUX0NPTkZJRzogSU1vbnRoQ2FsZW5kYXJDb25maWdJbnRlcm5hbCA9IHtcbiAgICBhbGxvd011bHRpU2VsZWN0OiBmYWxzZSxcbiAgICB5ZWFyRm9ybWF0OiAnWVlZWScsXG4gICAgZm9ybWF0OiAnTU0tWVlZWScsXG4gICAgaXNOYXZIZWFkZXJCdG5DbGlja2FibGU6IGZhbHNlLFxuICAgIG1vbnRoQnRuRm9ybWF0OiAnTU1NJyxcbiAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKSxcbiAgICBtdWx0aXBsZVllYXJzTmF2aWdhdGVCeTogMTAsXG4gICAgc2hvd011bHRpcGxlWWVhcnNOYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICB1blNlbGVjdE9uQ2xpY2s6IHRydWUsXG4gICAgbnVtT2ZNb250aFJvd3M6IDNcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxzU2VydmljZTogVXRpbHNTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXRDb25maWcoY29uZmlnOiBJTW9udGhDYWxlbmRhckNvbmZpZyk6IElNb250aENhbGVuZGFyQ29uZmlnSW50ZXJuYWwge1xuICAgIGNvbnN0IF9jb25maWcgPSA8SU1vbnRoQ2FsZW5kYXJDb25maWdJbnRlcm5hbD57XG4gICAgICAuLi50aGlzLkRFRkFVTFRfQ09ORklHLFxuICAgICAgLi4udGhpcy51dGlsc1NlcnZpY2UuY2xlYXJVbmRlZmluZWQoY29uZmlnKVxuICAgIH07XG5cbiAgICB0aGlzLnZhbGlkYXRlQ29uZmlnKF9jb25maWcpO1xuXG4gICAgdGhpcy51dGlsc1NlcnZpY2UuY29udmVydFByb3BzVG9Nb21lbnQoX2NvbmZpZywgX2NvbmZpZy5mb3JtYXQsIFsnbWluJywgJ21heCddKTtcbiAgICBtb21lbnQubG9jYWxlKF9jb25maWcubG9jYWxlKTtcblxuICAgIHJldHVybiBfY29uZmlnO1xuICB9XG5cbiAgZ2VuZXJhdGVZZWFyKGNvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWcsIHllYXI6IE1vbWVudCwgc2VsZWN0ZWQ6IE1vbWVudFtdID0gbnVsbCk6IElNb250aFtdW10ge1xuICAgIGNvbnN0IGluZGV4ID0geWVhci5jbG9uZSgpLnN0YXJ0T2YoJ3llYXInKTtcblxuICAgIHJldHVybiB0aGlzLnV0aWxzU2VydmljZS5jcmVhdGVBcnJheShjb25maWcubnVtT2ZNb250aFJvd3MpLm1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51dGlsc1NlcnZpY2UuY3JlYXRlQXJyYXkoMTIgLyBjb25maWcubnVtT2ZNb250aFJvd3MpLm1hcCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBpbmRleC5jbG9uZSgpO1xuICAgICAgICBjb25zdCBtb250aCA9IHtcbiAgICAgICAgICBkYXRlLFxuICAgICAgICAgIHNlbGVjdGVkOiAhIXNlbGVjdGVkLmZpbmQocyA9PiBpbmRleC5pc1NhbWUocywgJ21vbnRoJykpLFxuICAgICAgICAgIGN1cnJlbnRNb250aDogaW5kZXguaXNTYW1lKG1vbWVudCgpLCAnbW9udGgnKSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc01vbnRoRGlzYWJsZWQoZGF0ZSwgY29uZmlnKSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLmdldE1vbnRoQnRuVGV4dChjb25maWcsIGRhdGUpXG4gICAgICAgIH07XG5cbiAgICAgICAgaW5kZXguYWRkKDEsICdtb250aCcpO1xuXG4gICAgICAgIHJldHVybiBtb250aDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaXNNb250aERpc2FibGVkKGRhdGU6IE1vbWVudCwgY29uZmlnOiBJTW9udGhDYWxlbmRhckNvbmZpZykge1xuICAgIGlmIChjb25maWcubWluICYmIGRhdGUuaXNCZWZvcmUoY29uZmlnLm1pbiwgJ21vbnRoJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShjb25maWcubWF4ICYmIGRhdGUuaXNBZnRlcihjb25maWcubWF4LCAnbW9udGgnKSk7XG4gIH1cblxuICBzaG91bGRTaG93TGVmdChtaW46IE1vbWVudCwgY3VycmVudE1vbnRoVmlldzogTW9tZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1pbiA/IG1pbi5pc0JlZm9yZShjdXJyZW50TW9udGhWaWV3LCAneWVhcicpIDogdHJ1ZTtcbiAgfVxuXG4gIHNob3VsZFNob3dSaWdodChtYXg6IE1vbWVudCwgY3VycmVudE1vbnRoVmlldzogTW9tZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1heCA/IG1heC5pc0FmdGVyKGN1cnJlbnRNb250aFZpZXcsICd5ZWFyJykgOiB0cnVlO1xuICB9XG5cbiAgZ2V0SGVhZGVyTGFiZWwoY29uZmlnOiBJTW9udGhDYWxlbmRhckNvbmZpZywgeWVhcjogTW9tZW50KTogc3RyaW5nIHtcbiAgICBpZiAoY29uZmlnLnllYXJGb3JtYXR0ZXIpIHtcbiAgICAgIHJldHVybiBjb25maWcueWVhckZvcm1hdHRlcih5ZWFyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geWVhci5mb3JtYXQoY29uZmlnLnllYXJGb3JtYXQpO1xuICB9XG5cbiAgZ2V0TW9udGhCdG5UZXh0KGNvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWcsIG1vbnRoOiBNb21lbnQpOiBzdHJpbmcge1xuICAgIGlmIChjb25maWcubW9udGhCdG5Gb3JtYXR0ZXIpIHtcbiAgICAgIHJldHVybiBjb25maWcubW9udGhCdG5Gb3JtYXR0ZXIobW9udGgpO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aC5mb3JtYXQoY29uZmlnLm1vbnRoQnRuRm9ybWF0KTtcbiAgfVxuXG4gIGdldE1vbnRoQnRuQ3NzQ2xhc3MoY29uZmlnOiBJTW9udGhDYWxlbmRhckNvbmZpZywgbW9udGg6IE1vbWVudCk6IHN0cmluZyB7XG4gICAgaWYgKGNvbmZpZy5tb250aEJ0bkNzc0NsYXNzQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjb25maWcubW9udGhCdG5Dc3NDbGFzc0NhbGxiYWNrKG1vbnRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlQ29uZmlnKGNvbmZpZzogSU1vbnRoQ2FsZW5kYXJDb25maWdJbnRlcm5hbCk6IHZvaWQge1xuICAgIGlmIChjb25maWcubnVtT2ZNb250aFJvd3MgPCAxIHx8IGNvbmZpZy5udW1PZk1vbnRoUm93cyA+IDEyIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKDEyIC8gY29uZmlnLm51bU9mTW9udGhSb3dzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdudW1PZk1vbnRoUm93cyBoYXMgdG8gYmUgYmV0d2VlbiAxIC0gMTIgYW5kIGRpdmlkZSAxMiB0byBpbnRlZ2VyJyk7XG4gICAgfVxuICB9XG59XG4iXX0=