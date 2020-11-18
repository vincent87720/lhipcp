<template>
  <v-app>
    <v-container fluid>
      <v-row align="center">
        <v-col
          class="d-flex justify-center"
          cols="12"
        >
          <h2>勞健保自負額計算程式</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
          sm="12"
        >
          <v-alert
            class="d-flex justify-center align-center"
            border="top"
            color="blue-grey"
            dark
            dense
          >
            <h3>勞保自行負擔總計{{Insurance[3].self}}元</h3>
          </v-alert>
        </v-col>
        <v-col
          cols="12"
          md="6"
          sm="12"
        >
          <v-alert
            class="d-flex justify-center align-center"
            border="top"
            color="blue-grey"
            text
            dense
          >
            <h3>健保自行負擔總計{{Insurance[4].self}}元</h3>
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="d-flex order-0"
          cols="12"
          md="6"
          sm="12"
        >
          <v-text-field
            label="薪水"
            v-model="salary"
            @keyup="onVarChange"
            type='tel'
          ></v-text-field>
        </v-col>
        <v-col
          class="d-flex order-xl-1 order-lg-1 order-md-1 order-3"
          cols="12"
          md="6"
          sm="12"
        >
          <v-select
            label="適用職業災害費率"
            v-model="rate"
            :items="items"
            @input="onVarChange"
          ></v-select>
        </v-col>
        
        <v-col 
          class="d-flex d-md-none order-2"
        >
          <v-divider></v-divider>
        </v-col>

        <v-col
          class="d-flex order-xl-3 order-lg-3 order-md-3 order-1"
          cols="12"
          md="6"
          sm="12"
        >
          <v-date-picker
            v-model="dates"
            @input="onVarChange"
            color="blue-grey"
            full-width
            range
          ></v-date-picker>
        </v-col>
        <v-col
          class="order-3"
          cols="12"
          md="6"
          sm="12"
        >
          <v-data-table
            :headers="table_Headers"
            :items="Insurance"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    salary:"",
    laborSalaryLevel:{level: 0 ,rangeStart:  0,     rangeEnd: 0, premium: 0},
    healthSalaryLevel:{level: 0 ,rangeStart:  0,     rangeEnd: 0, premium: 0},
    rate: 0,
    dates: [],
    totalDate: 0,
    items:[0.11,0.12,0.13,0.15,0.16,0.17,0.18,0.19,0.20,0.21,0.22,0.23,0.24,
            0.26,0.27,0.28,0.37,0.39,0.40,0.41,0.47,0.48,0.53,0.61,0.92,0.96],
    laborRangeSet: [
      {level: 1 ,rangeStart:  0,     rangeEnd: 23800, premium: 23800},
      {level: 2 ,rangeStart: 	23801, rangeEnd: 24000, premium: 24000},
      {level: 3 ,rangeStart: 	24001, rangeEnd: 25200, premium: 25200},
      {level: 4 ,rangeStart:  25201, rangeEnd: 26400, premium: 26400},
      {level: 5 ,rangeStart: 	26401, rangeEnd: 27600, premium: 27600},
      {level: 6 ,rangeStart: 	27601, rangeEnd: 28800, premium: 28800},
      {level: 7 ,rangeStart: 	28801, rangeEnd: 30300, premium: 30300},
      {level: 8 ,rangeStart: 	30301, rangeEnd: 31800, premium: 31800},
      {level: 9 ,rangeStart: 	31801, rangeEnd: 33300, premium: 33300},
      {level: 10,rangeStart: 	33301, rangeEnd: 34800, premium: 34800},
      {level: 11,rangeStart: 	34801, rangeEnd: 36300, premium: 36300},
      {level: 12,rangeStart: 	36301, rangeEnd: 38200, premium: 38200},
      {level: 13,rangeStart: 	38201, rangeEnd: 40100, premium: 40100},
      {level: 14,rangeStart: 	40101, rangeEnd: 42000, premium: 42000},
      {level: 15,rangeStart: 	42001, rangeEnd: 43900, premium: 43900},
      {level: 16,rangeStart:  43901, rangeEnd: null , premium: 45800}
    ],
    healthRangeSet: [
      {level: 1 ,rangeStart: 0,      rangeEnd: 23800,  premium: 23800},
      {level: 2 ,rangeStart: 23801,  rangeEnd: 24000,  premium: 24000},
      {level: 3 ,rangeStart: 24001,  rangeEnd: 25200,  premium: 25200},
      {level: 4 ,rangeStart: 25201,  rangeEnd: 26400,  premium: 26400},
      {level: 5 ,rangeStart: 26401,  rangeEnd: 27600,  premium: 27600},
      {level: 6 ,rangeStart: 27601,  rangeEnd: 28800,  premium: 28800},
      {level: 7 ,rangeStart: 28801,  rangeEnd: 30300,  premium: 30300},
      {level: 8 ,rangeStart: 30301,  rangeEnd: 31800,  premium: 31800},
      {level: 9 ,rangeStart: 31801,  rangeEnd: 33300,  premium: 33300},
      {level: 10,rangeStart: 33301,  rangeEnd: 34800,  premium: 34800},
      {level: 11,rangeStart: 34801,  rangeEnd: 36300,  premium: 36300},
      {level: 12,rangeStart: 36301,  rangeEnd: 38200,  premium: 38200},
      {level: 13,rangeStart: 38201,  rangeEnd: 40100,  premium: 40100},
      {level: 14,rangeStart: 40101,  rangeEnd: 42000,  premium: 42000},
      {level: 15,rangeStart: 42001,  rangeEnd: 43900,  premium: 43900},
      {level: 16,rangeStart: 43901,  rangeEnd: 45800,  premium: 45800},
      {level: 17,rangeStart: 45801,  rangeEnd: 48200,  premium: 48200},
      {level: 18,rangeStart: 48201,  rangeEnd: 50600,  premium: 50600},
      {level: 19,rangeStart: 50601,  rangeEnd: 53000,  premium: 53000},
      {level: 20,rangeStart: 53001,  rangeEnd: 55400,  premium: 55400},
      {level: 21,rangeStart: 55401,  rangeEnd: 57800,  premium: 57800},
      {level: 22,rangeStart: 57801,  rangeEnd: 60800,  premium: 60800},
      {level: 23,rangeStart: 60801,  rangeEnd: 63800,  premium: 63800},
      {level: 24,rangeStart: 63801,  rangeEnd: 66800,  premium: 66800},
      {level: 25,rangeStart: 66801,  rangeEnd: 69800,  premium: 69800},
      {level: 26,rangeStart: 69801,  rangeEnd: 72800,  premium: 72800},
      {level: 27,rangeStart: 72801,  rangeEnd: 76500,  premium: 76500},
      {level: 28,rangeStart: 76501,  rangeEnd: 80200,  premium: 80200},
      {level: 29,rangeStart: 80201,  rangeEnd: 83900,  premium: 83900},
      {level: 30,rangeStart: 83901,  rangeEnd: 87600,  premium: 87600},
      {level: 31,rangeStart: 87601,  rangeEnd: 92100,  premium: 92100},
      {level: 32,rangeStart: 92101,  rangeEnd: 96600,  premium: 96600},
      {level: 33,rangeStart: 96601,  rangeEnd: 101100, premium: 101100},
      {level: 34,rangeStart: 101101, rangeEnd: 105600, premium: 105600},
      {level: 35,rangeStart: 105601, rangeEnd: 110100, premium: 110100},
      {level: 36,rangeStart: 110101, rangeEnd: 115500, premium: 115500},
      {level: 37,rangeStart: 115501, rangeEnd: 120900, premium: 120900},
      {level: 38,rangeStart: 120901, rangeEnd: 126300, premium: 126300},
      {level: 39,rangeStart: 126301, rangeEnd: 131700, premium: 131700},
      {level: 40,rangeStart: 131701, rangeEnd: 137100, premium: 137100},
      {level: 41,rangeStart: 137101, rangeEnd: 142500, premium: 142500},
      {level: 42,rangeStart: 142501, rangeEnd: 147900, premium: 147900},
      {level: 43,rangeStart: 147901, rangeEnd: 150000, premium: 150000},
      {level: 44,rangeStart: 150001, rangeEnd: 156400, premium: 156400},
      {level: 45,rangeStart: 156401, rangeEnd: 162800, premium: 162800},
      {level: 46,rangeStart: 162801, rangeEnd: 169200, premium: 169200},
      {level: 47,rangeStart: 169201, rangeEnd: 175600, premium: 175600},
      {level: 48,rangeStart: 175601, rangeEnd: null,   premium: 182000}
    ],
    Insurance:[
      {name: '普通事故保險費',government: 0 ,company: 0,self: 0},//普通事故保險
      {name: '職業災害保險費',government: 0 ,company: 0,self: 0},//職業災害保險
      {name: '就業保險費',government: 0 ,company: 0,self: 0},//就業保險
      {name: '總計勞保負擔保費',government: 0 ,company: 0,self: 0},//總計負擔保費
      {name: '健保保險費',government: 0 ,company: 0,self: 0},//健保保險
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
  }),
  methods:{
    dayCalc(){
      var totalDate = 0;
      if(this.dates.length > 1){
        var dateStart = this.dates[0].split("-");
        var dateEnd = this.dates[1].split("-");
        for(var i=0;i<3;i++){
          dateStart[i] = parseInt(dateStart[i]);
          dateEnd[i] = parseInt(dateEnd[i]);
        }
        var base = dateStart[0];
        dateStart[0] -= base;
        dateEnd[0] -= base;
        dateEnd[1] = dateEnd[0]*12+dateEnd[1];
        while(dateStart[1] != dateEnd[1]){
          if(dateEnd[2]>30){
            totalDate+=30;
          }
          else{
            totalDate+=dateEnd[2];
          }
          dateEnd[2] = 30;
          dateEnd[1] -= 1;
        }
        if(dateStart[2]>=30){
          totalDate += 1;
        }
        else{
          totalDate += dateEnd[2] - dateStart[2] + 1;
        }
      }
      else{
        totalDate = 1;  
      }
      
      this.totalDate = totalDate;
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
          insurancePremium = this.laborSalaryLevel.premium * 0.1;
        }
        else if(obj.name == "職業災害保險費"){
          obj.company = Math.round(this.laborSalaryLevel.premium * this.rate /100 /30 * this.totalDate);
          companyTotal +=obj.company;
          continue;
        }
        else if(obj.name == "就業保險費"){
          insurancePremium = this.laborSalaryLevel.premium * 0.01;
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

      var insurancePremium = 0.0469;//保險費率: 4.69%

      this.Insurance[pos].government = Math.round(this.healthSalaryLevel.premium*insurancePremium*0.1*1.58);
      this.Insurance[pos].company = Math.round(this.healthSalaryLevel.premium*insurancePremium*0.6*1.58);
      this.Insurance[pos].self = Math.round(this.healthSalaryLevel.premium*insurancePremium*0.3);

    },
    onVarChange(){
      
      this.dayCalc();
      this.laborPaymentCalculate();
      this.healthPaymentCalculate();
    }
  }
};
</script>
