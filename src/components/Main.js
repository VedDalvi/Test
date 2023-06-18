import './main.css';
function Main(){
return(
<main>
    <div class="intro">
      <h1>Event</h1>
      <p> Event Desc </p>
      <button>More Details</button>
    </div>
    <div class="metrics">
      <div class="upvt">
        <i class="fa-solid fa-arrow-up"></i>
        <p class="upvt-heading">Upvotes</p>
      </div>
      <div class="cmmt">
		<i class="fa-solid fa-comment"></i>
        <p class="cmmt-heading">User-Comments</p>
      </div>
      
    </div>

  </main>
)
}
  export default Main;