using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;

/// <summary>
/// Descripción breve de WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
// [System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService {

    public WebService () {

        //Elimine la marca de comentario de la línea siguiente si utiliza los componentes diseñados 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld() {
        return "Hola a todos";
    }

    [WebMethod]
    public int suma(int a, int b)
    {
        return a + b;
    }

    [WebMethod]
    public DataSet mostrarAlumnos ()
    {
        SqlConnection con = new SqlConnection();
        SqlDataAdapter ada = new SqlDataAdapter();
        con.ConnectionString = "server=DESKTOP-NEUR3IL\\SQLEXPRESS;user=alexis;pwd=1234;database=academico";
        ada.SelectCommand = new SqlCommand();
        ada.SelectCommand.Connection = con;
        ada.SelectCommand.CommandText = "select * from alumno";
        ada.SelectCommand.CommandType = CommandType.Text;
        DataSet ds = new DataSet();
        ada.Fill(ds, "alumno");
        return  ds;
    }

    [WebMethod]
    public void adicionarAlumno(String ci, String nombre, String paterno, String materno, String nota)
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "server=DESKTOP-NEUR3IL\\SQLEXPRESS;user=alexis;pwd=1234;database=academico";
        SqlCommand cmd = new SqlCommand();
        string sql = "insert into alumno values (" + ci + ",'" + nombre + "','" + paterno + "','" + materno + "'," + nota + ")";
        cmd.CommandText = sql;
        cmd.CommandType = CommandType.Text;
        cmd.Connection = con;
        con.Open();
        cmd.ExecuteNonQuery();
        con.Close();
    }

    [WebMethod]
    public void updateAlumno(String ci, String nombre, String paterno, String materno, String nota)
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "server=DESKTOP-NEUR3IL\\SQLEXPRESS;user=alexis;pwd=1234;database=academico";
        SqlCommand cmd = new SqlCommand();
        string sql = "update alumno set nombre='" + nombre + "', paterno='" + paterno + "', materno='" + materno + "', nota =" + nota + " where ci = "+ci+";";
        cmd.CommandText = sql;
        cmd.CommandType = CommandType.Text;
        cmd.Connection = con;
        con.Open();
        cmd.ExecuteNonQuery();
        con.Close();
    }

    [WebMethod]
    public void eliminarAlumno(String ci)
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "server=DESKTOP-NEUR3IL\\SQLEXPRESS;user=alexis;pwd=1234;database=academico";
        SqlCommand cmd = new SqlCommand();
        string sql = "delete from alumno where ci = " + ci + ";";
        cmd.CommandText = sql;
        cmd.CommandType = CommandType.Text;
        cmd.Connection = con;
        con.Open();
        cmd.ExecuteNonQuery();
        con.Close();
    }
    
}
