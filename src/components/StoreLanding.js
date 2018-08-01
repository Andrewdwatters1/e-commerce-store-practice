import React from 'react';
import {Link} from "react-router-dom";

const StoreLanding = function(props) {
  return (
<div>
    <Link to="/store"><button>Store</button></Link>
    <Link to="/about"><button>About</button></Link>
    <Link to="/history"><button>History</button></Link>
  </div>
  )
}

export default StoreLanding;