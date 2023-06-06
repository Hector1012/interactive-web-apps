// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


status = selector(shelf)
reserve = selector(reserved)
checkout = selector(overdue)
checkin = selector(checkout)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

elements.checkin.color = none
elements.status.style.color = STATUS_MAP.status.color
elements.reserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
elements.checkout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
elements.checkin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

elements.checkin.color = none
elements.status.style.color = STATUS_MAP.status.color.grey
elements.reserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
elements.checkout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
elements.checkin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

elements.checkin.color = none
elements.status.style.color = STATUS_MAP.status.color
elements.reserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
elements.checkout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
elements.checkin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'