<template>
  <v-app>
    <v-container fluid>
      <v-row align="center">
        <v-col
          class="d-flex justify-start order-1 order-md-0"
          cols="6"
          sm="6"
          md="4"
        >
          <v-speed-dial
            v-model="speedDialMode"
            direction="right"
            transition="slide-x-transition"
            class="mt-4 mb-4"
          >
            <template v-slot:activator>
              <v-btn
                v-model="speedDialMode"
                color="blue-grey"
                dark
                fab
                small
              >
                <v-icon v-if="speedDialMode">
                  mdi-close
                </v-icon>
                <v-icon v-else>
                  mdi-dots-horizontal
                </v-icon>
              </v-btn>
            </template>
            
            <div class="d-flex flex-column justify-start mt-4">
              <v-switch
                class="pa-0 ma-0"
                style="width:190px;"
                v-model="modeSwitch"
                color="blue-grey"
                inset
                dense
                :label="`${modeSwitch ? '雇主':'員工'}`"
                @change="onVarChange()"
              ></v-switch>
              <v-switch
                class="pa-0 ma-0"
                v-model="stateChange"
                color="blue-grey"
                inset
                dense
                :label="`${stateChange ? '有加退保':'無加退保'}`"
                @change="onVarChange()"
              ></v-switch>
              <v-switch
                class="pa-0 ma-0"
                v-model="stateChangeInSameMonth"
                color="blue-grey"
                inset
                dense
                :label="`${stateChangeInSameMonth ? '同月份加退保':'非同月加退保'}`"
                @change="onVarChange()"
              ></v-switch>
            </div>
              
          </v-speed-dial>
        </v-col>
        <v-col
          class="d-flex justify-center order-0 order-md-1"
          cols="12"
          sm="12"
          md="4"
        >
          <h2>勞健保計算程式</h2>
        </v-col>
        <v-col
          class="d-flex justify-end align-center order-2 order-md-2"
          cols="6"
          sm="6"
          md="4"
        >
          <v-speed-dial
            v-model="tableSpeedDial"
            direction="left"
            transition="slide-x-reverse-transition"
            class="mt-4 mb-4"
          >
            <template v-slot:activator>
              <v-btn
                v-model="tableSpeedDial"
                color="blue-grey"
                dark
                fab
                small
              >
                <v-icon v-if="tableSpeedDial">
                  mdi-close
                </v-icon>
                <v-icon v-else>
                  mdi-table
                </v-icon>
              </v-btn>
            </template>
          
            <v-btn
              color="blue-grey"
              class="ma-2"
              @click.stop="activeTableID = 0; activeTable = laborRangeSet; rangeSetDialog = true"
              dark
              small
            >
              勞保
            </v-btn>
            <v-btn
              color="blue-grey lighten-1"
              class="ma-2"
              @click.stop="activeTableID = 2; activeTable = healthRangeSet; rangeSetDialog = true"
              dark
              small
            >
              勞退
            </v-btn>
            <v-btn
              color="blue-grey lighten-5"
              class="ma-2 blue-grey--text"
              @click.stop="activeTableID = 1; activeTable = pensionRangeSet; rangeSetDialog = true"
              plain
              small
            >
              健保
            </v-btn>
          </v-speed-dial>
        </v-col>
      </v-row>

      <v-row>
        <!-- 薪水輸入欄位 -->
        <v-col
          class="order-0"
          cols="12"
          md="6"
          sm="12"
        >
          <v-text-field
            label="薪水"
            v-model="salary"
            @keyup="onVarChange"
            type='tel'
            color="blue-grey"
            dense
          ></v-text-field>
        </v-col>
        <!-- 適用職業災害費率選單 -->
        <v-col
          class="order-1"
          cols="12"
          md="6"
          sm="12"
        >
          <v-select
            label="適用職業災害費率"
            v-model="rate"
            :items="items"
            @input="onVarChange"
            color="blue-grey"
            dense
          ></v-select>
        </v-col>
        <!-- 日期選擇器 -->
        <v-col
          class="order-2"
          cols="12"
          md="6"
          sm="12"
        >
          <v-date-picker
            v-model="dates"
            @input="onVarChange"
            color="blue-grey"
            full-width
            scrollable
            range
          ></v-date-picker>
        </v-col>
        <!-- 分隔線 -->
        <v-col 
          class="d-flex d-md-none order-3"
        >
          <v-divider></v-divider>
        </v-col>
        <!-- 細項顯示區塊 -->
        <v-col
          class="order-11 order-md-3"
          cols="12"
          md="6"
          sm="12"
        >
          <v-data-table
            :headers="table_Headers"
            :items="Insurance"
            hide-default-footer
            class="elevation-1"
          ></v-data-table>
        </v-col>
        <!-- 負擔總額顯示區塊 -->
        <v-col
          cols="12"
          md="12"
          sm="12"
          class="order-4"
        >
          <v-alert
            class="d-flex justify-center align-center"
            color="blue-grey"
            outlined
            dense
          >
            <h3 v-if="modeSwitch == true">勞保+健保+勞退 雇主負擔總計{{Insurance[3].company+Insurance[4].company+Insurance[5].company}}元</h3>
            <h3 v-else>勞保+健保 自行負擔總計{{Insurance[3].self+Insurance[4].self}}元</h3>
          </v-alert>
        </v-col>
        <!-- 勞保負擔總額顯示區塊 -->
        <v-col
          cols="12"
          md="4"
          sm="12"
          class="order-5"
        >
          <v-alert
            class="d-flex justify-center align-center"
            border="top"
            color="blue-grey"
            dark
            dense
          >
            <h3>勞保{{modeSwitch ? '雇主':'自行'}}負擔總計{{modeSwitch ? Insurance[3].company:Insurance[3].self}}元</h3>
          </v-alert>
        </v-col>
        <!-- 勞退負擔總額顯示區塊 -->
        <v-col
          cols="12"
          md="4"
          sm="12"
          class="order-6"
        >
          <v-alert
            class="d-flex justify-center align-center"
            border="top"
            color="blue-grey lighten-1"
            dark
            dense
          >
            <h3>勞退{{modeSwitch ? '雇主':'自行'}}負擔總計{{modeSwitch ? Insurance[5].company:Insurance[5].self}}元</h3>
          </v-alert>
        </v-col>
        <!-- 健保負擔總額顯示區塊 -->
        <v-col
          cols="12"
          md="4"
          sm="12"
          class="order-7"
        >
          <v-alert
            class="d-flex justify-center align-center"
            border="top"
            color="blue-grey"
            text
            dense
          >
            <h3>健保{{modeSwitch ? '雇主':'自行'}}負擔總計{{modeSwitch ? Insurance[4].company:Insurance[4].self}}元</h3>
          </v-alert>
        </v-col>
        <!-- 顯示勞保計算公式 -->
        <v-col
          class="order-8 d-flex align-stretch flex-column"
          cols="12"
          md="4"
          sm="12"
        >
          <v-alert
            class="d-flex justify-start justify-md-center align-center"
            color="blue-grey"
            dark
            dense
          >
            <h3>普通事故保險費</h3>
            <p v-if="modeSwitch">
              {{laborSalaryLevel.premium}}(投保薪資)&nbsp;
              *{{ordinaryAccidentInsuranceRate*100}}%(普通事故保險費費率)&nbsp;
              *70%(雇主負擔比率)&nbsp;
              /30(每月天數)&nbsp;
              *{{totalDate}}(實際天數)&nbsp;
              ={{Insurance[0].company}}
            </p>
            <p v-else>
              {{laborSalaryLevel.premium}}(投保薪資)&nbsp;
              *{{ordinaryAccidentInsuranceRate*100}}%(普通事故保險費費率)&nbsp;
              *20%(自行負擔比率)&nbsp;
              /30(每月天數)&nbsp;
              *{{totalDate}}(實際天數)&nbsp;
              ={{Insurance[0].self}}
            </p>
            
            <h3>+</h3>
            <h3>職業災害保險費</h3>
            <p v-if="modeSwitch">
              {{laborSalaryLevel.premium}}(投保薪資)&nbsp;
              *{{rate}}%(職業災害保險費費率)&nbsp;
              /30(每月天數)&nbsp;
              *{{totalDate}}(實際天數)&nbsp;
              ={{Insurance[1].company}}
            </p>
            <p v-else>
              0
            </p>
            <h3>+</h3>
            <h3>就業保險費</h3>
            <p v-if="modeSwitch">
              {{laborSalaryLevel.premium}}(投保薪資)&nbsp;
              *{{employmentInsuranceRate*100}}%(就業保險費費率)&nbsp;
              *70%(雇主負擔比率)&nbsp;
              /30(每月天數)&nbsp;
              *{{totalDate}}(實際天數)&nbsp;
              ={{Insurance[2].company}}
            </p>
            <p v-else>
              {{laborSalaryLevel.premium}}(投保薪資)&nbsp;
              *{{employmentInsuranceRate*100}}%(就業保險費費率)&nbsp;
              *20%(雇主負擔比率)&nbsp;
              /30(每月天數)&nbsp;
              *{{totalDate}}(實際天數)&nbsp;
              ={{Insurance[2].self}}
            </p>
            <h3>=</h3>
            <h3>總金額</h3>
            <h3>{{modeSwitch ? Insurance[3].company:Insurance[3].self}}</h3>
          </v-alert>
        </v-col>
        <!-- 顯示勞退計算公式 -->
        <v-col
          class="order-9 d-flex align-stretch flex-column"
          cols="12"
          md="4"
          sm="12"
        >
          <v-alert
            class="d-flex justify-start justify-md-center align-stretch fill-height"
            color="blue-grey lighten-1"
            dark
            dense
          >
            <h3>勞工退休金{{modeSwitch ? '':'(非強制提繳)'}}</h3>
            <p v-if="fullMonth">
              {{pensionSalaryLevel.premium}}(月提繳薪資)
              {{modeSwitch ? '*6%(雇主提繳比率)':'*3.5%(全月自願提繳比率)'}}
              ={{modeSwitch ? Insurance[5].company:Insurance[5].self}}
            </p>
            <p v-else>
              {{pensionSalaryLevel.premium}}(月提繳薪資)
              /30(每月天數) *{{totalDate}}(實際天數)
              {{modeSwitch ? '*6%(雇主提繳比率)':'*2%(非全月自願提繳比率)'}}
              ={{modeSwitch ? Insurance[5].company:Insurance[5].self}}
            </p>
            <h3>=</h3>
            <h3>總金額</h3>
            <h3>{{modeSwitch ? Insurance[5].company:Insurance[5].self}}</h3>
          </v-alert>
        </v-col>
        <!-- 顯示健保計算公式 -->
        <v-col
          class="order-10 d-flex align-stretch flex-column"
          cols="12"
          md="4"
          sm="12"
        >
          <v-alert
            class="d-flex justify-start justify-md-center align-stretch fill-height"
            color="blue-grey"
            dark
            dense
            text
          >
            <h3>健保保險費</h3>
            <p v-if="modeSwitch">
              {{healthSalaryLevel.premium}}(投保薪資)&nbsp;
              *{{healthInsuranceRate*100}}%(健保保險費費率)&nbsp;
              *60%(雇主負擔比率)&nbsp;
              *{{totalMonth}}(月份數量)&nbsp;
              *1.58(1+平均眷口數)&nbsp;
              ={{Insurance[4].company}}
            </p>
            <p v-else>
              {{healthSalaryLevel.premium}}(投保薪資)&nbsp;
              *{{healthInsuranceRate*100}}%(健保保險費費率)&nbsp;
              *30%(自行負擔比率)&nbsp;
              *{{totalMonth}}(月份數量)&nbsp;
              ={{Insurance[4].self}}
            </p>
            <h3>=</h3>
            <h3>總金額</h3>
            <h3>{{modeSwitch ? Insurance[4].company:Insurance[4].self}}</h3>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="rangeSetDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="headline">
          {{rageSetTable[activeTableID].title}}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    {{rageSetTable[activeTableID].col1}}
                  </th>
                  <th class="text-left">
                    {{rageSetTable[activeTableID].col2}}
                  </th>
                  <th class="text-left">
                    {{rageSetTable[activeTableID].col3}}
                  </th>
                  <th class="text-left">
                    {{rageSetTable[activeTableID].col4}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in activeTable"
                  :key="item.level"
                >
                  <td>{{ item.level }}</td>
                  <td>{{ item.rangeStart }}</td>
                  <td>{{ item.rangeEnd == null ? ">"+item.rangeStart : item.rangeEnd }}</td>
                  <td>{{ item.premium }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-grey"
            text
            @click="rangeSetDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    salary:"",//薪水v-text-field欄位
    rate: 0,//適用職業災害費率v-select欄位
    dates: [],//使用v-date-picker選取的原始日期
    speedDialMode: false,//開啟切換狀態群組的v-speed-dial狀態
    tableSpeedDial: false,
    modeSwitch: false,//切換員工或雇主的v-switch
    stateChange:false,//切換是否有加退保的v-switch
    stateChangeInSameMonth: false,//切換是否同月加退保的v-switch
    rangeSetDialog:false,//開啟或關閉級距表的v-dialog

    fullMonth:true,
    activeTable: null,
    activeTableID:1,
    totalMonth:0,//使用v-date-picker選取的總月份數
    totalDate: 0,//使用v-date-picker選取的總天數
    laborSalaryLevel:{level: 0 ,rangeStart:  0,     rangeEnd: 0, premium: 0},
    healthSalaryLevel:{level: 0 ,rangeStart:  0,     rangeEnd: 0, premium: 0},
    pensionSalaryLevel:{level: 0 ,rangeStart:  0,     rangeEnd: 0, premium: 0},

    ordinaryAccidentInsuranceRate: 0.11,//勞保普通事故保險費率11%
    employmentInsuranceRate: 0.01,//就業保險費率1%
    healthInsuranceRate: 0.0517,//保險費率: 5.17%
    laborRangeSet: [
      {level: 1,  rangeStart: 0,      rangeEnd: 26400, premium: 26400},
      {level: 2,  rangeStart: 26401,  rangeEnd: 27600, premium: 27600},
      {level: 3,  rangeStart: 27601,  rangeEnd: 28800, premium: 28800},
      {level: 4,  rangeStart: 28801,  rangeEnd: 30300, premium: 30300},
      {level: 5,  rangeStart: 30301,  rangeEnd: 31800, premium: 31800},
      {level: 6,  rangeStart: 31801,  rangeEnd: 33300, premium: 33300},
      {level: 7,  rangeStart: 33301,  rangeEnd: 34800, premium: 34800},
      {level: 8,  rangeStart: 34801,  rangeEnd: 36300, premium: 36300},
      {level: 9,  rangeStart: 36301,  rangeEnd: 38200, premium: 38200},
      {level: 10, rangeStart: 38201,  rangeEnd: 40100, premium: 40100},
      {level: 11, rangeStart: 40101,  rangeEnd: 42000, premium: 42000},
      {level: 12, rangeStart: 42001,  rangeEnd: 43900, premium: 43900},
      {level: 13, rangeStart: 43901,  rangeEnd: null , premium: 45800}
    ],
    healthRangeSet: [
      {level: 1,  rangeStart: 0,      rangeEnd: 26400,  premium: 26400},
      {level: 2,  rangeStart: 26401,  rangeEnd: 27600,  premium: 27600},
      {level: 3,  rangeStart: 27601,  rangeEnd: 28800,  premium: 28800},
      {level: 4,  rangeStart: 28801,  rangeEnd: 30300,  premium: 30300},
      {level: 5,  rangeStart: 30301,  rangeEnd: 31800,  premium: 31800},
      {level: 6,  rangeStart: 31801,  rangeEnd: 33300,  premium: 33300},
      {level: 7,  rangeStart: 33301,  rangeEnd: 34800,  premium: 34800},
      {level: 8,  rangeStart: 34801,  rangeEnd: 36300,  premium: 36300},
      {level: 9,  rangeStart: 36301,  rangeEnd: 38200,  premium: 38200},
      {level: 10, rangeStart: 38201,  rangeEnd: 40100,  premium: 40100},
      {level: 11, rangeStart: 40101,  rangeEnd: 42000,  premium: 42000},
      {level: 12, rangeStart: 42001,  rangeEnd: 43900,  premium: 43900},
      {level: 13, rangeStart: 43901,  rangeEnd: 45800,  premium: 45800},
      {level: 14, rangeStart: 45801,  rangeEnd: 48200,  premium: 48200},
      {level: 15, rangeStart: 48201,  rangeEnd: 50600,  premium: 50600},
      {level: 16, rangeStart: 50601,  rangeEnd: 53000,  premium: 53000},
      {level: 17, rangeStart: 53001,  rangeEnd: 55400,  premium: 55400},
      {level: 18, rangeStart: 55401,  rangeEnd: 57800,  premium: 57800},
      {level: 19, rangeStart: 57801,  rangeEnd: 60800,  premium: 60800},
      {level: 20, rangeStart: 60801,  rangeEnd: 63800,  premium: 63800},
      {level: 21, rangeStart: 63801,  rangeEnd: 66800,  premium: 66800},
      {level: 22, rangeStart: 66801,  rangeEnd: 69800,  premium: 69800},
      {level: 23, rangeStart: 69801,  rangeEnd: 72800,  premium: 72800},
      {level: 24, rangeStart: 72801,  rangeEnd: 76500,  premium: 76500},
      {level: 25, rangeStart: 76501,  rangeEnd: 80200,  premium: 80200},
      {level: 26, rangeStart: 80201,  rangeEnd: 83900,  premium: 83900},
      {level: 27, rangeStart: 83901,  rangeEnd: 87600,  premium: 87600},
      {level: 28, rangeStart: 87601,  rangeEnd: 92100,  premium: 92100},
      {level: 29, rangeStart: 92101,  rangeEnd: 96600,  premium: 96600},
      {level: 30, rangeStart: 96601,  rangeEnd: 101100, premium: 101100},
      {level: 31, rangeStart: 101101, rangeEnd: 105600, premium: 105600},
      {level: 32, rangeStart: 105601, rangeEnd: 110100, premium: 110100},
      {level: 33, rangeStart: 110101, rangeEnd: 115500, premium: 115500},
      {level: 34, rangeStart: 115501, rangeEnd: 120900, premium: 120900},
      {level: 35, rangeStart: 120901, rangeEnd: 126300, premium: 126300},
      {level: 36, rangeStart: 126301, rangeEnd: 131700, premium: 131700},
      {level: 37, rangeStart: 131701, rangeEnd: 137100, premium: 137100},
      {level: 38, rangeStart: 137101, rangeEnd: 142500, premium: 142500},
      {level: 39, rangeStart: 142501, rangeEnd: 147900, premium: 147900},
      {level: 40, rangeStart: 147901, rangeEnd: 150000, premium: 150000},
      {level: 41, rangeStart: 150001, rangeEnd: 156400, premium: 156400},
      {level: 42, rangeStart: 156401, rangeEnd: 162800, premium: 162800},
      {level: 43, rangeStart: 162801, rangeEnd: 169200, premium: 169200},
      {level: 44, rangeStart: 169201, rangeEnd: 175600, premium: 175600},
      {level: 45, rangeStart: 175601, rangeEnd: 182000, premium: 182000},
      {level: 46, rangeStart: 182001, rangeEnd: 189500, premium: 189500},
      {level: 47, rangeStart: 189501, rangeEnd: 197000, premium: 197000},
      {level: 48, rangeStart: 197001, rangeEnd: 204500, premium: 204500},
      {level: 49, rangeStart: 204501, rangeEnd: 212000, premium: 212000},
      {level: 50, rangeStart: 212001, rangeEnd: null,   premium: 219500},
    ],
    pensionRangeSet:[
      {level: 1 , rangeStart:      0, rangeEnd:   1500, premium:   1500},
      {level: 2 , rangeStart:   1501, rangeEnd:   3000, premium:   3000},
      {level: 3 , rangeStart:   3001, rangeEnd:   4500, premium:   4500},
      {level: 4 , rangeStart:   4501, rangeEnd:   6000, premium:   6000},
      {level: 5 , rangeStart:   6001, rangeEnd:   7500, premium:   7500},
      {level: 6 , rangeStart:   7501, rangeEnd:   8700, premium:   8700},
      {level: 7 , rangeStart:   8701, rangeEnd:   9900, premium:   9900},
      {level: 8 , rangeStart:   9901, rangeEnd:  11100, premium:  11100},
      {level: 9 , rangeStart:  11101, rangeEnd:  12540, premium:  12540},
      {level: 10, rangeStart:  12541, rangeEnd:  13500, premium:  13500},
      {level: 11, rangeStart:  13501, rangeEnd:  15840, premium:  15840},
      {level: 12, rangeStart:  15841, rangeEnd:  16500, premium:  16500},
      {level: 13, rangeStart:  16501, rangeEnd:  17280, premium:  17280},
      {level: 14, rangeStart:  17281, rangeEnd:  17880, premium:  17880},
      {level: 15, rangeStart:  17881, rangeEnd:  19047, premium:  19047},
      {level: 16, rangeStart:  19048, rangeEnd:  20008, premium:  20008},
      {level: 17, rangeStart:  20009, rangeEnd:  21009, premium:  21009},
      {level: 18, rangeStart:  21010, rangeEnd:  22000, premium:  22000},
      {level: 19, rangeStart:  22001, rangeEnd:  23100, premium:  23100},
      {level: 20, rangeStart:  23101, rangeEnd:  24000, premium:  24000},
      {level: 21, rangeStart:  24001, rangeEnd:  25200, premium:  25200},
      {level: 22, rangeStart:  25201, rangeEnd:  26400, premium:  26400},
      {level: 23, rangeStart:  26401, rangeEnd:  27600, premium:  27600},
      {level: 24, rangeStart:  27601, rangeEnd:  28800, premium:  28800},
      {level: 25, rangeStart:  28801, rangeEnd:  30300, premium:  30300},
      {level: 26, rangeStart:  30301, rangeEnd:  31800, premium:  31800},
      {level: 27, rangeStart:  31801, rangeEnd:  33300, premium:  33300},
      {level: 28, rangeStart:  33301, rangeEnd:  34800, premium:  34800},
      {level: 29, rangeStart:  34801, rangeEnd:  36300, premium:  36300},
      {level: 30, rangeStart:  36301, rangeEnd:  38200, premium:  38200},
      {level: 31, rangeStart:  38201, rangeEnd:  40100, premium:  40100},
      {level: 32, rangeStart:  40101, rangeEnd:  42000, premium:  42000},
      {level: 33, rangeStart:  42001, rangeEnd:  43900, premium:  43900},
      {level: 34, rangeStart:  43901, rangeEnd:  45800, premium:  45800},
      {level: 35, rangeStart:  45801, rangeEnd:  48200, premium:  48200},
      {level: 36, rangeStart:  48201, rangeEnd:  50600, premium:  50600},
      {level: 37, rangeStart:  50601, rangeEnd:  53000, premium:  53000},
      {level: 38, rangeStart:  53001, rangeEnd:  55400, premium:  55400},
      {level: 39, rangeStart:  55401, rangeEnd:  57800, premium:  57800},
      {level: 40, rangeStart:  57801, rangeEnd:  60800, premium:  60800},
      {level: 41, rangeStart:  60801, rangeEnd:  63800, premium:  63800},
      {level: 42, rangeStart:  63801, rangeEnd:  66800, premium:  66800},
      {level: 43, rangeStart:  66801, rangeEnd:  69800, premium:  69800},
      {level: 44, rangeStart:  69801, rangeEnd:  72800, premium:  72800},
      {level: 45, rangeStart:  72801, rangeEnd:  76500, premium:  76500},
      {level: 46, rangeStart:  76501, rangeEnd:  80200, premium:  80200},
      {level: 47, rangeStart:  80201, rangeEnd:  83900, premium:  83900},
      {level: 48, rangeStart:  83901, rangeEnd:  87600, premium:  87600},
      {level: 49, rangeStart:  87601, rangeEnd:  92100, premium:  92100},
      {level: 50, rangeStart:  92101, rangeEnd:  96600, premium:  96600},
      {level: 51, rangeStart:  96601, rangeEnd: 101100, premium: 101100},
      {level: 52, rangeStart: 101101, rangeEnd: 105600, premium: 105600},
      {level: 53, rangeStart: 105601, rangeEnd: 110100, premium: 110100},
      {level: 54, rangeStart: 110101, rangeEnd: 115500, premium: 115500},
      {level: 55, rangeStart: 115501, rangeEnd: 120900, premium: 120900},
      {level: 56, rangeStart: 120901, rangeEnd: 126300, premium: 126300},
      {level: 57, rangeStart: 126301, rangeEnd: 131700, premium: 131700},
      {level: 58, rangeStart: 131701, rangeEnd: 137100, premium: 137100},
      {level: 59, rangeStart: 137101, rangeEnd: 142500, premium: 142500},
      {level: 60, rangeStart: 142501, rangeEnd: 147900, premium: 147900},
      {level: 61, rangeStart: 147901, rangeEnd: 150000, premium: 150000},
      {level: 62, rangeStart: 150001, rangeEnd: 156400, premium: 156400},
      {level: 63, rangeStart: 156401, rangeEnd: 162800, premium: 162800},
      {level: 64, rangeStart: 162801, rangeEnd: 169200, premium: 169200},
      {level: 65, rangeStart: 169201, rangeEnd: 175600, premium: 175600},
      {level: 66, rangeStart: 175601, rangeEnd: 182000, premium: 182000},
      {level: 67, rangeStart: 182001, rangeEnd: 189500, premium: 189500},
      {level: 68, rangeStart: 189501, rangeEnd: 197000, premium: 197000},
      {level: 69, rangeStart: 197001, rangeEnd: 204500, premium: 204500},
      {level: 70, rangeStart: 204501, rangeEnd: 212000, premium: 212000},
      {level: 71, rangeStart: 212001, rangeEnd: null,   premium: 219500},
    ],
    Insurance:[
      {name: '普通事故保險費',government: 0 ,company: 0,self: 0},//普通事故保險
      {name: '職業災害保險費',government: 0 ,company: 0,self: 0},//職業災害保險
      {name: '就業保險費',government: 0 ,company: 0,self: 0},//就業保險
      {name: '總計勞保負擔保費',government: 0 ,company: 0,self: 0},//總計負擔保費
      {name: '健保保險費',government: 0 ,company: 0,self: 0},//健保保險
      {name: '勞工退休金',government: 0 ,company: 0,self: 0},//勞工退休金
    ],
    table_Headers: [
      {
        text: ' ',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '雇主負擔', value: 'company' },
      { text: '自行負擔', value: 'self' },
      { text: '政府負擔', value: 'government' },
    ],
    items:[0.11,0.12,0.13,0.15,0.16,0.17,0.18,0.19,0.20,0.21,0.22,0.23,0.24,
            0.26,0.27,0.28,0.37,0.39,0.40,0.41,0.47,0.48,0.53,0.61,0.92,0.96],
    rageSetTable:[
      { 
        id:0,
        title: '勞工保險投保薪資分級表',
        col1:'投保薪資等級',
        col2:'起始薪資',
        col3:'結束薪資',
        col4:'月投保薪資',
      },
      {
        id:1,
        title: '全民健康保險投保薪資分級表',
        col1:'投保薪資等級',
        col2:'起始薪資',
        col3:'結束薪資',
        col4:'月投保薪資',
      },
      {
        id:2,
        title: '勞工退休金提繳薪資分級表',
        col1:'提繳薪資等級',
        col2:'起始薪資',
        col3:'結束薪資',
        col4:'月提繳薪資',
      },
    ],
  }),
  methods:{
    checkLeapYear(year){
      if ((year%4==0&&year%100!=0) || year%400==0) {
        return true;
      }else{
        return false;
      }
    },
    getLastDay(month,leapyear){
      var lastday = 0;
      switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          lastday = 31;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          lastday = 30;
          break;
        case 2:
          (leapyear) ? lastday = 29 : lastday = 28;
          break;
        default:
          lastday=30;
      }
      return lastday;
    },
    checkFullMonth(dateStart,dateEnd){
      var leapyear = false;
      var lastday = 0;
      if(dateStart[2] != 1){
        return false;
      }
      leapyear = this.checkLeapYear(dateEnd[0]);
      lastday = this.getLastDay(dateEnd[1],leapyear);
      if (lastday != dateEnd[2]){
        return false;
      }

      return true;
    },
    dayCalc(){
      this.fullMonth = false;
      var totalDate = 0;
      if(this.dates.length > 1){
        var dateStart = this.dates[0].split("-");
        var dateEnd = this.dates[1].split("-");
        for(var i=0;i<3;i++){
          dateStart[i] = parseInt(dateStart[i]);
          dateEnd[i] = parseInt(dateEnd[i]);
        }

        //判斷開始時間是否小於結束時間，若沒有則交換
        var swap = [];
        let startInt = new Date(this.dates[0]).getTime();
        let endInt = new Date(this.dates[1]).getTime();
        if(startInt>endInt){
          swap = dateStart;
          dateStart = dateEnd;
          dateEnd = swap;
        }

        this.fullMonth = this.checkFullMonth(dateStart,dateEnd);
        
        var yearCount = dateEnd[0]-dateStart[0];
        var monthStart = dateStart[1];
        var monthEnd = yearCount*12+dateEnd[1];
        this.totalMonth = monthEnd-monthStart+1;

        var leapyear = false;
        var lastmonthlastday = 30;
        var firstmonthlastday = 30;

        leapyear = this.checkLeapYear(dateEnd[0]);
        lastmonthlastday = this.getLastDay(dateEnd[1],leapyear);
        firstmonthlastday = this.getLastDay(dateStart[1],leapyear);

        if(this.stateChangeInSameMonth == true){//同月加退保
          if(dateEnd[2] > 30){
            dateEnd[2] = 30;
          }
          totalDate = dateEnd[2]-dateStart[2]+1;
        }
        else{
          if(dateStart[2] == 1 && dateEnd[2] == lastmonthlastday && this.stateChange == false){//全月
            //若是全月(開始日期為1號，結束日期為該月最後一天)，則將月份數*30天
            totalDate = (monthEnd-monthStart+1)*30;
          }
          else{//非全月(有加或有退)
            
            //若總月份數為一個月，直接計算日期天數
            if(this.totalMonth < 2){
              if(dateStart[2] == 1 && dateEnd[2] != lastmonthlastday){//當月退保
                if(dateEnd[2]>30){
                  dateEnd[2] = 30;
                }
                totalDate = dateEnd[2];
              }
              else if(dateStart[2] != 1 && dateEnd[2] == lastmonthlastday){//當月加保
                if(dateStart[2] > 30){
                  dateStart[2] = 30;
                }
                totalDate = 30-dateStart[2]+1
              }
              else if(dateStart[2] == 1 && dateEnd[2] == lastmonthlastday){
                if(dateEnd[2] > 30){
                  dateEnd[2] = 30;
                }
                totalDate = dateEnd[2]-dateStart[2]+1
              }
              else if(dateStart[2] != 1 && dateEnd[2] != lastmonthlastday){
                if(dateEnd[2] > 30){
                  dateEnd[2] = 30;
                }
                totalDate = dateEnd[2]-dateStart[2]+1;
              }
            }

            //若總月份數大於1個月(2個月(包含)以上)
            if(this.totalMonth >= 2){

              //加上最後一個月的天數，需判斷最後一個月是否為全月
              if (lastmonthlastday == dateEnd[2]){
                totalDate+= 30;
              }
              else{
                totalDate+= dateEnd[2];
              }

              //加上第一個月的天數，需判斷第一個月是否為全月
              if(dateStart[2] == 1){
                totalDate+= 30;
              }
              else if(dateStart[2] >= 30){
                totalDate+= 1;//若該月天數超過30天則算為30天
              }
              else{
                totalDate+=30-dateStart[2]+1
              }
            }
            if(this.totalMonth > 2){
              //加上中間月份的天數
              totalDate+=(this.totalMonth-2)*30
            }
          }
        }
      }
      else{
        totalDate = 1;  
      }
      
      this.totalDate = totalDate;
    },
    test_dayCalc(){
      var testTable = [
        { date: ["2020-01-01","2020-01-01"], expectedDays: 1 },
        { date: ["2020-01-01","2020-01-02"], expectedDays: 2 },
        { date: ["2020-01-01","2020-01-29"], expectedDays: 29 },
        { date: ["2020-01-01","2020-01-30"], expectedDays: 30 },
        { date: ["2020-01-01","2020-01-31"], expectedDays: 30 },
        { date: ["2020-01-02","2020-01-29"], expectedDays: 28 },
        { date: ["2020-01-02","2020-01-30"], expectedDays: 29 },
        { date: ["2020-01-02","2020-01-31"], expectedDays: 30 },
        { date: ["2020-01-29","2020-01-31"], expectedDays: 3 },
        { date: ["2020-01-30","2020-01-31"], expectedDays: 1 },
        { date: ["2020-01-01","2020-02-01"], expectedDays: 31 },
        { date: ["2020-01-01","2020-02-28"], expectedDays: 58 },
        { date: ["2020-01-01","2020-02-29"], expectedDays: 60 },
        { date: ["2020-01-02","2020-02-28"], expectedDays: 58 },
        { date: ["2020-01-03","2020-02-28"], expectedDays: 57 },
        { date: ["2020-01-03","2020-02-29"], expectedDays: 59 },
        { date: ["2020-01-01","2020-03-29"], expectedDays: 89 },
        { date: ["2020-01-01","2020-03-30"], expectedDays: 90 },
        { date: ["2020-01-01","2020-03-31"], expectedDays: 90 },
        { date: ["2020-01-02","2020-03-29"], expectedDays: 89 },
        { date: ["2020-01-02","2020-03-30"], expectedDays: 90 },
        { date: ["2020-01-02","2020-03-31"], expectedDays: 90 },
        { date: ["2020-01-03","2020-03-29"], expectedDays: 88 },
        { date: ["2020-01-03","2020-03-30"], expectedDays: 89 },
        { date: ["2020-01-03","2020-03-31"], expectedDays: 89 },
      ]
      var pass = true;

      for(var i=0;i<testTable.length;i++){
        this.dates = testTable[i].date;
        this.dayCalc();
        if(this.totalDate != testTable[i].expectedDays){
          console.log("testDate:",testTable[i].date,"expectedDays:",testTable[i].expectedDays," actual:",this.totalDate)
          pass = false;
        }
      }
      console.log("test_dayCalc: ",(pass)? "pass" : "fail")
    },
    laborPaymentCalculate(){

      //判斷所屬級距並將級距資訊放入laborSalaryLevel
      for (let index = this.laborRangeSet.length-1; index >=0; index--) {
        const element = this.laborRangeSet[index];
        if(this.salary>=element.rangeStart){
          this.laborSalaryLevel = element;
          break
        }
      }

      for (var i=0;i<4;i++) {
        this.Insurance[i].government = 0;
        this.Insurance[i].company = 0;
        this.Insurance[i].self = 0;
      }
      var insurancePremium = 0;
      var governmentTotal = 0;
      var companyTotal = 0;
      var selfTotal = 0;
      for (var i=0;i<5;i++) {
        const obj = this.Insurance[i];
        
        if(obj.name == "普通事故保險費"){
          insurancePremium = this.laborSalaryLevel.premium * this.ordinaryAccidentInsuranceRate;
        }
        else if(obj.name == "職業災害保險費"){
          obj.company = Math.round(this.laborSalaryLevel.premium * this.rate /100 /30 * this.totalDate);
          companyTotal +=obj.company;
          continue;
        }
        else if(obj.name == "就業保險費"){
          insurancePremium = this.laborSalaryLevel.premium * this.employmentInsuranceRate;
        }
        else if(obj.name == "總計勞保負擔保費"){
          obj.government = governmentTotal;
          obj.company = companyTotal;
          obj.self = selfTotal;
          continue;
        }
        obj.government = Math.round(insurancePremium * 0.1 /30.0 * this.totalDate);
        obj.company = Math.round(insurancePremium * 0.7 /30.0 * this.totalDate);
        obj.self = Math.round(insurancePremium * 0.2 /30.0 * this.totalDate);
        governmentTotal +=obj.government;
        companyTotal +=obj.company;
        selfTotal +=obj.self;
      }
    },
    healthPaymentCalculate(){

      //判斷所屬級距並將級距資訊放入healthSalaryLevel
      for (let index = this.healthRangeSet.length-1; index >=0; index--) {
        const element = this.healthRangeSet[index];
        if(this.salary>=element.rangeStart){
          this.healthSalaryLevel = element;
          break
        }
      }

      var pos = 0;
      for(var i=0;i<this.Insurance.length;i++){
        if(this.Insurance[i].name == "健保保險費"){
          pos = i;
        }
      }


      this.Insurance[pos].government = Math.round(this.healthSalaryLevel.premium*this.healthInsuranceRate*0.1*1.58*this.totalMonth);
      this.Insurance[pos].company = Math.round(this.healthSalaryLevel.premium*this.healthInsuranceRate*0.6*1.58*this.totalMonth);
      this.Insurance[pos].self = Math.round(this.healthSalaryLevel.premium*this.healthInsuranceRate*0.3*this.totalMonth);

    },
    pensionPaymentCalculate(){
      //判斷所屬級距並將級距資訊放入pensionSalaryLevel
      for (let index = this.pensionRangeSet.length-1; index >=0; index--) {
        const element = this.pensionRangeSet[index];
        if(this.salary>=element.rangeStart){
          this.pensionSalaryLevel = element;
          break
        }
      }

      var pos = 0;
      for(var i=0;i<this.Insurance.length;i++){
        if(this.Insurance[i].name == "勞工退休金"){
          pos = i;
        }
      }

      
      //全月
      if(this.fullMonth == true){
        this.Insurance[pos].company = Math.round(this.pensionSalaryLevel.premium*0.06);
        this.Insurance[pos].self = Math.round(this.pensionSalaryLevel.premium*0.035);
      }
      else{
        this.Insurance[pos].company = Math.round(this.pensionSalaryLevel.premium/30.0*0.06*parseInt(this.totalDate/30)+this.pensionSalaryLevel.premium/30.0*0.06*(this.totalDate%30));
        this.Insurance[pos].self = Math.round(this.pensionSalaryLevel.premium/30.0*0.035*parseInt(this.totalDate/30)+this.pensionSalaryLevel.premium/30.0*0.02*(this.totalDate%30));
      }

    },
    onVarChange(){
      
      this.dayCalc();
      this.laborPaymentCalculate();
      this.healthPaymentCalculate();
      this.pensionPaymentCalculate();
    }
  },
};
</script>