import React from 'react'
import { useUserContext } from '../../UserContext'
import { useNavigate } from 'react-router-dom'
import { donationsA, events } from '../../components/initial-data'
import EventosCard from '../../components/cards/EventosCard/EventosCard'
import './MyProfile.css'

const MyProfile = () => {
    const navigate = useNavigate();

    const { user2 } = useUserContext();

    const handleEditProfileClick = () => {
        // Navigate to the Register page when the button is clicked
        navigate('/edit-my-profile');
      };

    

    const userEvents = events.filter((event) =>
        (event.eventAssistList || []).some((assist) => assist.userId === user2?.userId)
    );

    // Take the last two events
    const latestUserEvents = userEvents.slice(-2).reverse();

    //console.log(userEvents);

    const userDonations = donationsA.filter(
        (donation) =>
            donation.name === user2?.userName &&
            donation.apellido === user2?.userLastName &&
            donation.email === user2?.userEmail &&
            donation.telefono === user2?.userPhone
    );

    // Take the last two donations
    const lastTwoDonations = userDonations.slice(-2).reverse();

    console.log(lastTwoDonations);

    return (
        <div className='my-prof-cont'>

            <div className="my-prof-card">
                <div className="upper-prof-sect">
                    <div className="prof-pic-name-cont">
                        <img src={user2?.userProfilePic} alt="your-profile" />
                        <h1>{user2?.userName} {user2?.userLastName}</h1>
                    </div>
                    <button className='edit-profile-button' onClick={handleEditProfileClick}> EDITAR MY PERFIL </button>
                </div>
                <hr></hr>
                <div className="lower-prof-sect">
                    <h2>
                        Mi información personal
                    </h2>
                    <div className="prof-info-box">
                        <div className="email-phone">
                            <div className="email-cont">
                                <p><strong>Correo electrónico:</strong> </p>
                                <p>{user2?.userEmail}</p>
                            </div>
                            <div className="phone-cont">
                                <p><strong>Número de teléfono:</strong> </p>
                                <p>{user2?.userPhone}</p>
                            </div>
                        </div>
                        <div className="depto-add-me">
                            <div className="depto-cont">
                                <p><strong>Departamento:</strong> </p>
                                <p>{user2?.userDepto}</p>
                            </div>
                            <div className="address-cont">
                                <p><strong>Dirección:</strong> </p>
                                <p>{user2?.userAddress}</p>
                            </div>
                            <div className="me-cont">
                                <p><strong>Acerca de mí:</strong> </p>
                                <p>{user2?.userDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            {user2?.roleId === '3' && (
            <div className="my-prof-additional">
                <div className="soli-dona-adop-prof">
                    <div className="soli-adop-prof">
                        <h2>
                            Mis solicitudes
                        </h2>
                        <div className="soli-adop-titles-prof">
                            <p>Nom. del felino</p>
                            <p>Fecha de solicitud</p>
                            <p>Estado de solicitud</p>
                        </div>
                        tarejtas soli
                    </div>
                    <div className="soli-dona-prof">
                        <h2>
                            Mis donaciones
                        </h2>
                        <div className="soli-dona-titles-prof">
                            <p>No. transacción</p>
                            <p>Fecha de transacción</p>
                            <p>Monto</p>
                        </div>
                        {lastTwoDonations.length > 0 && (
                        <div className="solicitudes-dona-myprof">
                            {lastTwoDonations.map((donation, index) => (
                                <div key={index} className="card-dona-myprof">
                                    <p>{donation.name} {donation.apellido}</p>
                                    <p>{donation.fechaTrans}</p>
                                    <p>{donation.amount}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>
                </div>
                <div className="my-events">
                    <h2>Mis eventos</h2>
                    {latestUserEvents.map((event, index) => (
                        <div key={index} className="card-ev-prof">
                            <EventosCard
                                date={event.date}
                                eventName={event.eventName}
                                location={event.location}
                                description={event.description}
                                buttonText={event.buttonText}
                                viewType="home"
                                eventImage={event.eventImage}
                                eventType={event.eventType}
                                eventHour={event.eventHour}
                            />
                        </div>
                    ))}
                </div>

            </div>
            )}



        </div>
    )
}

export default MyProfile
