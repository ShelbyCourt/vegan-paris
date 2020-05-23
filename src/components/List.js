import React from 'react';
import Restaurant from './Restaurant'

function List(props) {
  const restaurantMap = props.addedRestaurant.map((restaurant) => (
    <Restaurant
      key={restaurant.id}
      saveName={props.saveName}
      saveArrondissement={props.saveArrondissement}
      saveRating={props.saveRating}
      removeRestaurant={props.removeRestaurant}
      data={restaurant}
    />
    ))

    return (
        <div>
            <h3>Mes restaurants végans</h3>
            <div
    style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
    {restaurantMap}
      </div>
   </div>
  )
}



export default List