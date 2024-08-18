// pages/calendar.tsx
// eslint-disable-next-line react/no-unescaped-entities
import React, { useState } from 'react';
import Layout from '../../components/Layout/index';


const Calendar: React.FC = () => {
  const [view, setView] = useState<'month' | 'week'>('month');

  return (
    <Layout signed>
    <div className="p-10">
  <div className="flex">
    <button className="flex relative rounded-[10px] overflow-hidden justify-center py-3 text-xl font-jakarta font-bold text-white group p-3">
      <div className="absolute left-0 w-full gradient from-primary-200 to-primary-300 bg-gradient-to-r  group-hover:rotate-90 duration-200 top-1/2 -translate-y-1/2 h-screen" />
      <span className="relative">Month</span>
    </button>
    <button className="flex relative rounded-[10px] overflow-hidden justify-center py-3 text-xl font-jakarta font-bold text-white group p-3 ml-2">
      <div className="absolute left-0 w-full gradient from-primary-200 to-primary-300 bg-gradient-to-r  group-hover:rotate-90 duration-200 top-1/2 -translate-y-1/2 h-screen" />
      <span className="relative">Week</span>
    </button>
  </div>
  <div className="fc fc-media-screen fc-direction-ltr fc-theme-standard">
    <div className="fc-header-toolbar fc-toolbar ">
      <div className="fc-toolbar-chunk">
        <h2 className="fc-toolbar-title" id="fc-dom-1">
          August 2024
        </h2>
      </div>
      <div className="fc-toolbar-chunk" />
      <div className="fc-toolbar-chunk">
        <button
          type="button"
          title="This month"
          disabled=""
          aria-pressed="false"
          className="fc-today-button fc-button fc-button-primary"
        >
          today
        </button>
        <div className="fc-button-group">
          <button
            type="button"
            title="Previous month"
            aria-pressed="false"
            className="fc-prev-button fc-button fc-button-primary"
          >
            <span className="fc-icon fc-icon-chevron-left" role="img" />
          </button>
          <button
            type="button"
            title="Next month"
            aria-pressed="false"
            className="fc-next-button fc-button fc-button-primary"
          >
            <span className="fc-icon fc-icon-chevron-right" role="img" />
          </button>
        </div>
      </div>
    </div>
    <div
      aria-labelledby="fc-dom-1"
      className="fc-view-harness fc-view-harness-active"
      style={{ height: "1189.63px" }}
    >
      <div className="fc-dayGridMonth-view fc-view fc-daygrid">
        <table role="grid" className="fc-scrollgrid  fc-scrollgrid-liquid">
          <thead role="rowgroup">
            <tr
              role="presentation"
              className="fc-scrollgrid-section fc-scrollgrid-section-header "
            >
              <th role="presentation">
                <div className="fc-scroller-harness">
                  <div className="fc-scroller" style={{ overflow: "hidden" }}>
                    <table
                      role="presentation"
                      className="fc-col-header "
                      style={{ width: 1603 }}
                    >
                      <colgroup />
                      <thead role="presentation">
                        <tr role="row">
                          <th
                            role="columnheader"
                            className="fc-col-header-cell fc-day fc-day-sun"
                          >
                            <div className="fc-scrollgrid-sync-inner">
                              <a
                                aria-label="Sunday"
                                className="fc-col-header-cell-cushion"
                              >
                                Sun
                              </a>
                            </div>
                          </th>
                          <th
                            role="columnheader"
                            className="fc-col-header-cell fc-day fc-day-mon"
                          >
                            <div className="fc-scrollgrid-sync-inner">
                              <a
                                aria-label="Monday"
                                className="fc-col-header-cell-cushion"
                              >
                                Mon
                              </a>
                            </div>
                          </th>
                          <th
                            role="columnheader"
                            className="fc-col-header-cell fc-day fc-day-tue"
                          >
                            <div className="fc-scrollgrid-sync-inner">
                              <a
                                aria-label="Tuesday"
                                className="fc-col-header-cell-cushion"
                              >
                                Tue
                              </a>
                            </div>
                          </th>
                          <th
                            role="columnheader"
                            className="fc-col-header-cell fc-day fc-day-wed"
                          >
                            <div className="fc-scrollgrid-sync-inner">
                              <a
                                aria-label="Wednesday"
                                className="fc-col-header-cell-cushion"
                              >
                                Wed
                              </a>
                            </div>
                          </th>
                          <th
                            role="columnheader"
                            className="fc-col-header-cell fc-day fc-day-thu"
                          >
                            <div className="fc-scrollgrid-sync-inner">
                              <a
                                aria-label="Thursday"
                                className="fc-col-header-cell-cushion"
                              >
                                Thu
                              </a>
                            </div>
                          </th>
                          <th
                            role="columnheader"
                            className="fc-col-header-cell fc-day fc-day-fri"
                          >
                            <div className="fc-scrollgrid-sync-inner">
                              <a
                                aria-label="Friday"
                                className="fc-col-header-cell-cushion"
                              >
                                Fri
                              </a>
                            </div>
                          </th>
                          <th
                            role="columnheader"
                            className="fc-col-header-cell fc-day fc-day-sat"
                          >
                            <div className="fc-scrollgrid-sync-inner">
                              <a
                                aria-label="Saturday"
                                className="fc-col-header-cell-cushion"
                              >
                                Sat
                              </a>
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr
              role="presentation"
              className="fc-scrollgrid-section fc-scrollgrid-section-body  fc-scrollgrid-section-liquid"
            >
              <td role="presentation">
                <div className="fc-scroller-harness fc-scroller-harness-liquid">
                  <div
                    className="fc-scroller fc-scroller-liquid-absolute"
                    style={{ overflow: "hidden auto" }}
                  >
                    <div
                      className="fc-daygrid-body fc-daygrid-body-unbalanced "
                      style={{ width: 1603 }}
                    >
                      <table
                        role="presentation"
                        className="fc-scrollgrid-sync-table"
                        style={{ width: 1603, height: 1158 }}
                      >
                        <colgroup />
                        <tbody role="presentation">
                          <tr role="row">
                            <td
                              aria-labelledby="fc-dom-2"
                              role="gridcell"
                              data-date="2024-07-28"
                              className="fc-day fc-day-sun fc-day-past fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="July 28, 2024"
                                    id="fc-dom-2"
                                    className="fc-daygrid-day-number"
                                  >
                                    28
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-4"
                              role="gridcell"
                              data-date="2024-07-29"
                              className="fc-day fc-day-mon fc-day-past fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="July 29, 2024"
                                    id="fc-dom-4"
                                    className="fc-daygrid-day-number"
                                  >
                                    29
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-6"
                              role="gridcell"
                              data-date="2024-07-30"
                              className="fc-day fc-day-tue fc-day-past fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="July 30, 2024"
                                    id="fc-dom-6"
                                    className="fc-daygrid-day-number"
                                  >
                                    30
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-8"
                              role="gridcell"
                              data-date="2024-07-31"
                              className="fc-day fc-day-wed fc-day-past fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="July 31, 2024"
                                    id="fc-dom-8"
                                    className="fc-daygrid-day-number"
                                  >
                                    31
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-10"
                              role="gridcell"
                              data-date="2024-08-01"
                              className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 1, 2024"
                                    id="fc-dom-10"
                                    className="fc-daygrid-day-number"
                                  >
                                    1
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-12"
                              role="gridcell"
                              data-date="2024-08-02"
                              className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 2, 2024"
                                    id="fc-dom-12"
                                    className="fc-daygrid-day-number"
                                  >
                                    2
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-14"
                              role="gridcell"
                              data-date="2024-08-03"
                              className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 3, 2024"
                                    id="fc-dom-14"
                                    className="fc-daygrid-day-number"
                                  >
                                    3
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                          </tr>
                          <tr role="row">
                            <td
                              aria-labelledby="fc-dom-16"
                              role="gridcell"
                              data-date="2024-08-04"
                              className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 4, 2024"
                                    id="fc-dom-16"
                                    className="fc-daygrid-day-number"
                                  >
                                    4
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-18"
                              role="gridcell"
                              data-date="2024-08-05"
                              className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 5, 2024"
                                    id="fc-dom-18"
                                    className="fc-daygrid-day-number"
                                  >
                                    5
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-20"
                              role="gridcell"
                              data-date="2024-08-06"
                              className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 6, 2024"
                                    id="fc-dom-20"
                                    className="fc-daygrid-day-number"
                                  >
                                    6
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-22"
                              role="gridcell"
                              data-date="2024-08-07"
                              className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 7, 2024"
                                    id="fc-dom-22"
                                    className="fc-daygrid-day-number"
                                  >
                                    7
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-24"
                              role="gridcell"
                              data-date="2024-08-08"
                              className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 8, 2024"
                                    id="fc-dom-24"
                                    className="fc-daygrid-day-number"
                                  >
                                    8
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-26"
                              role="gridcell"
                              data-date="2024-08-09"
                              className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 9, 2024"
                                    id="fc-dom-26"
                                    className="fc-daygrid-day-number"
                                  >
                                    9
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-28"
                              role="gridcell"
                              data-date="2024-08-10"
                              className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 10, 2024"
                                    id="fc-dom-28"
                                    className="fc-daygrid-day-number"
                                  >
                                    10
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                          </tr>
                          <tr role="row">
                            <td
                              aria-labelledby="fc-dom-30"
                              role="gridcell"
                              data-date="2024-08-11"
                              className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 11, 2024"
                                    id="fc-dom-30"
                                    className="fc-daygrid-day-number"
                                  >
                                    11
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-32"
                              role="gridcell"
                              data-date="2024-08-12"
                              className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 12, 2024"
                                    id="fc-dom-32"
                                    className="fc-daygrid-day-number"
                                  >
                                    12
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-34"
                              role="gridcell"
                              data-date="2024-08-13"
                              className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 13, 2024"
                                    id="fc-dom-34"
                                    className="fc-daygrid-day-number"
                                  >
                                    13
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-36"
                              role="gridcell"
                              data-date="2024-08-14"
                              className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 14, 2024"
                                    id="fc-dom-36"
                                    className="fc-daygrid-day-number"
                                  >
                                    14
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-38"
                              role="gridcell"
                              data-date="2024-08-15"
                              className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 15, 2024"
                                    id="fc-dom-38"
                                    className="fc-daygrid-day-number"
                                  >
                                    15
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-40"
                              role="gridcell"
                              data-date="2024-08-16"
                              className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 16, 2024"
                                    id="fc-dom-40"
                                    className="fc-daygrid-day-number"
                                  >
                                    16
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-42"
                              role="gridcell"
                              data-date="2024-08-17"
                              className="fc-day fc-day-sat fc-day-today fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 17, 2024"
                                    id="fc-dom-42"
                                    className="fc-daygrid-day-number"
                                  >
                                    17
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                          </tr>
                          <tr role="row">
                            <td
                              aria-labelledby="fc-dom-44"
                              role="gridcell"
                              data-date="2024-08-18"
                              className="fc-day fc-day-sun fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 18, 2024"
                                    id="fc-dom-44"
                                    className="fc-daygrid-day-number"
                                  >
                                    18
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-46"
                              role="gridcell"
                              data-date="2024-08-19"
                              className="fc-day fc-day-mon fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 19, 2024"
                                    id="fc-dom-46"
                                    className="fc-daygrid-day-number"
                                  >
                                    19
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-48"
                              role="gridcell"
                              data-date="2024-08-20"
                              className="fc-day fc-day-tue fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 20, 2024"
                                    id="fc-dom-48"
                                    className="fc-daygrid-day-number"
                                  >
                                    20
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-50"
                              role="gridcell"
                              data-date="2024-08-21"
                              className="fc-day fc-day-wed fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 21, 2024"
                                    id="fc-dom-50"
                                    className="fc-daygrid-day-number"
                                  >
                                    21
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-52"
                              role="gridcell"
                              data-date="2024-08-22"
                              className="fc-day fc-day-thu fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 22, 2024"
                                    id="fc-dom-52"
                                    className="fc-daygrid-day-number"
                                  >
                                    22
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-54"
                              role="gridcell"
                              data-date="2024-08-23"
                              className="fc-day fc-day-fri fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 23, 2024"
                                    id="fc-dom-54"
                                    className="fc-daygrid-day-number"
                                  >
                                    23
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-56"
                              role="gridcell"
                              data-date="2024-08-24"
                              className="fc-day fc-day-sat fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 24, 2024"
                                    id="fc-dom-56"
                                    className="fc-daygrid-day-number"
                                  >
                                    24
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                          </tr>
                          <tr role="row">
                            <td
                              aria-labelledby="fc-dom-58"
                              role="gridcell"
                              data-date="2024-08-25"
                              className="fc-day fc-day-sun fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 25, 2024"
                                    id="fc-dom-58"
                                    className="fc-daygrid-day-number"
                                  >
                                    25
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-60"
                              role="gridcell"
                              data-date="2024-08-26"
                              className="fc-day fc-day-mon fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 26, 2024"
                                    id="fc-dom-60"
                                    className="fc-daygrid-day-number"
                                  >
                                    26
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-62"
                              role="gridcell"
                              data-date="2024-08-27"
                              className="fc-day fc-day-tue fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 27, 2024"
                                    id="fc-dom-62"
                                    className="fc-daygrid-day-number"
                                  >
                                    27
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-64"
                              role="gridcell"
                              data-date="2024-08-28"
                              className="fc-day fc-day-wed fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 28, 2024"
                                    id="fc-dom-64"
                                    className="fc-daygrid-day-number"
                                  >
                                    28
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-66"
                              role="gridcell"
                              data-date="2024-08-29"
                              className="fc-day fc-day-thu fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 29, 2024"
                                    id="fc-dom-66"
                                    className="fc-daygrid-day-number"
                                  >
                                    29
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-68"
                              role="gridcell"
                              data-date="2024-08-30"
                              className="fc-day fc-day-fri fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 30, 2024"
                                    id="fc-dom-68"
                                    className="fc-daygrid-day-number"
                                  >
                                    30
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-70"
                              role="gridcell"
                              data-date="2024-08-31"
                              className="fc-day fc-day-sat fc-day-future fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="August 31, 2024"
                                    id="fc-dom-70"
                                    className="fc-daygrid-day-number"
                                  >
                                    31
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                          </tr>
                          <tr role="row">
                            <td
                              aria-labelledby="fc-dom-72"
                              role="gridcell"
                              data-date="2024-09-01"
                              className="fc-day fc-day-sun fc-day-future fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="September 1, 2024"
                                    id="fc-dom-72"
                                    className="fc-daygrid-day-number"
                                  >
                                    1
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-74"
                              role="gridcell"
                              data-date="2024-09-02"
                              className="fc-day fc-day-mon fc-day-future fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="September 2, 2024"
                                    id="fc-dom-74"
                                    className="fc-daygrid-day-number"
                                  >
                                    2
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-76"
                              role="gridcell"
                              data-date="2024-09-03"
                              className="fc-day fc-day-tue fc-day-future fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="September 3, 2024"
                                    id="fc-dom-76"
                                    className="fc-daygrid-day-number"
                                  >
                                    3
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-78"
                              role="gridcell"
                              data-date="2024-09-04"
                              className="fc-day fc-day-wed fc-day-future fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="September 4, 2024"
                                    id="fc-dom-78"
                                    className="fc-daygrid-day-number"
                                  >
                                    4
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-80"
                              role="gridcell"
                              data-date="2024-09-05"
                              className="fc-day fc-day-thu fc-day-future fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="September 5, 2024"
                                    id="fc-dom-80"
                                    className="fc-daygrid-day-number"
                                  >
                                    5
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-82"
                              role="gridcell"
                              data-date="2024-09-06"
                              className="fc-day fc-day-fri fc-day-future fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="September 6, 2024"
                                    id="fc-dom-82"
                                    className="fc-daygrid-day-number"
                                  >
                                    6
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                            <td
                              aria-labelledby="fc-dom-84"
                              role="gridcell"
                              data-date="2024-09-07"
                              className="fc-day fc-day-sat fc-day-future fc-day-other fc-daygrid-day"
                            >
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <a
                                    aria-label="September 7, 2024"
                                    id="fc-dom-84"
                                    className="fc-daygrid-day-number"
                                  >
                                    7
                                  </a>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div
                                    className="fc-daygrid-day-bottom"
                                    style={{ marginTop: 0 }}
                                  />
                                </div>
                                <div className="fc-daygrid-day-bg" />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </Layout>
  );
}

export default Calendar;
