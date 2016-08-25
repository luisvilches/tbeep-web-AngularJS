angular.module('app', [])


.controller('consultaSaldo', function($scope,$http)
{
	
	$scope.consulta = function()
	{
		$scope.load = 'loadOn'
		$http.get('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+$scope.numeroBip)
		.success(function(data)
		{
			$scope.load = 'loadOff'
			$scope.status = 'success'
			$scope.numero = data.id;
			$scope.saldo = data.saldoTarjeta;
			$scope.contrato = data.estadoContrato;
			$scope.fecha = data.fechaSaldo;
			$scope.textSaldo = "Su Saldo es de:";
			$scope.textNumero = "Numero de Tarjeta:";
			$scope.textContrato = "Estado de Contrato:";
			$scope.textFecha = "Fecha de Saldo:";
			console.log(data);
		})
		.error(function(err)
		{
			$scope.load = 'loadOff'
			$scope.status = 'error'
			$scope.saldo = err.error;
			$scope.textSaldo = "Error:";
			$scope.textNumero = "";
			$scope.textContrato = "";
			$scope.textFecha = "";
			$scope.numero = "";
			$scope.contrato = "";
			$scope.fecha = "";
			console.log($scope.error)
		})
	}
})
