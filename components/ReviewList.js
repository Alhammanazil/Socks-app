app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
      /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <b>{{ review.name }}</b>
        <br/>
        ⭐ {{ review.rating }}
        <br/>
        "{{ review.review }}"
        <br/>
        Recommend this product? {{ review.recommend }}
      </li>
    </ul>
  </div>
`
})