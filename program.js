fred = new turtle();

function square() {
	fred.move();
	fred.face(north);
	fred.move();
	fred.face(west);
	fred.move();
	fred.face(south);
	fred.move();
	fred.face(east);	
}

square();
fred.face(south);
square();