<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Proposal Id</th>
                    <th>Abstract</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in result" :key="item.id">
                    <td> <a id="ViewUsers" data_id="0" href="#" class="btn btn-sm btn-outline-success" data-toggle="modal" data-target="#modalUsers">{{item.proposalNumber}}</a>
          </td>
                    <td>{{item.abstract}}</td>
                    <td>{{item.beginDate}}</td>
                    <td>{{item.endDate}}</td>

                </tr>
            </tbody>
        </table>
    </div>
    <div class="modal fade" id="modalUsers">
      <div class="modal-dialog">
          <div class="modal-content">
            <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>OrcId</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>OrdId</th>
                    
                </tr>
                <tr v-for="item in users" :key="item.id">
                    <td>{{item.ordid}}</td>
                    <td>{{item.name}}</td>

                </tr>
            </tbody>
        </table>
              </div>
              <div id="footer" class="modal-footer">
                  <a href="#" class="btn btn-sm btn-outline-danger" data-dismiss="modal">Cancel</a>
            
          </div>
      </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'ProposalList',
    data() {
       return {
        result: [],
        users: [],
    };
  },
    props: {
        msg: String
    },
    mounted() {

        this.GetData();

    },
    methods: {
        GetData() {
            axios.get("http://localhost:5071/api/Proposal/GetProposals", {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  }
}).then(res => {
               console.log('Logging output....');
                console.log(res.data);
                this.result=res.data;
                console.log(this.result);
            })
           .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
  });
        },
        GetUsers() {
            axios.get("http://localhost:5071/api/Proposal/GetUsers?proposalId=1", {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  }
}).then(res => {
               console.log('Logging output....');
                console.log(res.data);
                this.result=res.data;
                console.log(this.result);
            })
           .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
  });
        }
    }
}
</script>