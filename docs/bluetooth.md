# Bluetooth

## Classic

Richiedono una connessione stabile ed un consumo maggiore offrendo una maggiore velocità di trasferimento.

## Low Energy (BLE)

Ottimizzato per applicazioni che richiedono uno scambio di dati meno frequente ed un consumo energetico ridotto.

Profilo **GATT** per l'interazione.

### GATT

Ci sono due ruoli:

- Server: dispositivo che espone dati o caratteristiche che altri device vorrebbero controllare
- Client: Si interfaccia con il Server per leggere i dati.

Un dispositivo BLE può essere Client e Server in contemporanea.

Per capire il GATT bisogno comprendere i Servizi e le Caratteristiche. I **Servizi** raggruppano uno e più attributi.
Un Attributo è un nome generico per identificare un qualsiasi tipo di dato esposto dal server.

Una **caratteristica** è sempre parte di un servizio e rappresenta un pezzo di informazione che il Server vuole esporre ai client.

### MTU

Maximum Transmission Unit. Dopo l'inizio della connessione i dispositivi negoziano l'MTU.
l'MTU massimo teorico è di 512 byte.
