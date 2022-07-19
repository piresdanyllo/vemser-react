import styles from './SectionMap.module.css'
import GoogleMapReact from 'google-map-react'

const SectionMap = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return(
        <section className={styles.map}>
            <h2>Endereço da DBC</h2>
            <div style={{ height: '500px', width: '500px' }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact> */}
    </div>
        </section>
    )
}

export default SectionMap